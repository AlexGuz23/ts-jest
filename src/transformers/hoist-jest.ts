// take care of including ONLY TYPES here, for the rest use `ts`
import { LogContexts, LogLevels } from 'bs-logger'
import type {
  Block,
  ExpressionStatement,
  Node,
  SourceFile,
  Statement,
  TransformationContext,
  Transformer,
  Visitor,
} from 'typescript'

import type { ConfigSet } from '../config/config-set'

/**
 * What methods of `jest` should we hoist
 */
const HOIST_METHODS = ['mock', 'unmock', 'enableAutomock', 'disableAutomock', 'deepUnmock']
const JEST_GLOBAL_NAME = 'jest'
const JEST_GLOBALS_MODULE_NAME = '@jest/globals'
/**
 * @internal
 */
export const name = 'hoisting-jest-mock'
// increment this each time the code is modified
/**
 * @internal
 */
export const version = 2

/**
 * The factory of hoisting transformer factory
 *
 * @internal
 */
export function factory(cs: ConfigSet): (ctx: TransformationContext) => Transformer<SourceFile> {
  const logger = cs.logger.child({ namespace: 'ts-hoisting' })
  /**
   * Our compiler (typescript, or a module with typescript-like interface)
   * To access Program or TypeChecker, do: cs.tsCompiler.program or cs.tsCompiler.program.getTypeChecker()
   */
  const ts = cs.compilerModule

  function shouldHoistExpression(expression: Node): boolean {
    return (
      ts.isCallExpression(expression) &&
      ts.isPropertyAccessExpression(expression.expression) &&
      HOIST_METHODS.includes(expression.expression.name.text) &&
      ((ts.isIdentifier(expression.expression.expression) &&
        expression.expression.expression.text === JEST_GLOBAL_NAME) ||
        shouldHoistExpression(expression.expression.expression))
    )
  }

  /**
   * Checks whether given node is a statement that we need to hoist
   */
  function shouldHoistNode(node: Node): node is ExpressionStatement {
    return ts.isExpressionStatement(node) && shouldHoistExpression(node.expression)
  }

  function isJestGlobalImport(node: Statement): boolean {
    return (
      ts.isImportDeclaration(node) &&
      ts.isStringLiteral(node.moduleSpecifier) &&
      node.moduleSpecifier.text === JEST_GLOBALS_MODULE_NAME
    )
  }

  /**
   * Create a source file visitor which will visit all nodes in a source file
   */
  function createVisitor(ctx: TransformationContext, _: SourceFile) {
    /**
     * Current block level
     */
    let level = 0
    /**
     * List of nodes which needs to be hoisted, indexed by their owning level
     */
    const hoisted: Statement[][] = []
    /**
     * Called when we enter a block to increase the level
     */
    const enter = () => {
      level++
      // reuse arrays
      if (hoisted[level]) {
        hoisted[level].splice(0, hoisted[level].length)
      }
    }
    /**
     * Called when we leave a block to decrease the level
     */
    const exit = () => level--
    /**
     * Adds a node to the list of nodes to be hoisted in the current level
     *
     * @param node The node to hoist
     */
    const hoist = (node: Statement) => {
      if (hoisted[level]) {
        hoisted[level].push(node)
      } else {
        hoisted[level] = [node]
      }
    }
    /**
     * Our main visitor, which will be called recursively for each node in the source file's AST
     */
    const visitor: Visitor = (node) => {
      // enter this level
      enter()

      // visit each child
      let resultNode = ts.visitEachChild(node, visitor, ctx)
      // check if we have something to hoist in this level
      if (hoisted[level] && hoisted[level].length) {
        // re-order children so that hoisted ones appear first
        // this is actually the main job of this transformer
        const hoistedStmts = hoisted[level]
        const otherStmts = (resultNode as Block).statements.filter(
          (s) => !hoistedStmts.includes(s) && !isJestGlobalImport(s),
        )
        const newNode = ts.getMutableClone(resultNode) as Block
        const newStatements = [...hoistedStmts, ...otherStmts]
        if (level === 1) {
          const jestGlobalsImportStmts = (resultNode as Block).statements.filter((s) => isJestGlobalImport(s))
          resultNode = {
            ...newNode,
            statements: ts.createNodeArray([...jestGlobalsImportStmts, ...newStatements]),
          } as Statement
        } else {
          resultNode = {
            ...newNode,
            statements: ts.createNodeArray(newStatements),
          } as Statement
        }
      }

      // exit the level
      exit()

      if (shouldHoistNode(resultNode)) {
        // hoist into current level
        hoist(resultNode as Statement)
      }

      // finally returns the currently visited node
      return resultNode
    }

    return visitor
  }

  // returns the transformer factory
  return (ctx: TransformationContext): Transformer<SourceFile> =>
    logger.wrap(
      { [LogContexts.logLevel]: LogLevels.debug, call: null },
      'visitSourceFileNode(): hoisting',
      (sf: SourceFile) => ts.visitNode(sf, createVisitor(ctx, sf)),
    )
}
