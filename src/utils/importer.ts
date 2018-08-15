import Memoize from './memoize'
import {
  TClosestFileData,
  TBabelJest,
  TBabelCore,
  ModulePatcher,
  TTypeScript,
  TsJestImporter,
} from '../types'
import * as hacks from './hacks'
import { ImportReasons, Errors, interpolate, Helps } from './messages'

const importDefault = (mod: any) =>
  mod && mod.__esModule ? mod : { default: mod }

// When ading an optional dependency which has another reason, add the reason in ImportReasons, and
// create a new method in Importer. Thus uses the importer.yourMethod(ImportReasons.TheReason)
// in the relevant code, so that the user knows why it needs it and how to install it in the
// case it can't import.

interface ImportOptions {
  alternatives?: string[]
  installTip?: string | Array<{ module: string; label: string }>
}

class Importer implements TsJestImporter {
  // here we can define patches to apply to modules.
  // it could be fixes that are not deployed, or
  // abstractions so that multiple versions work the same
  protected _patches: { [moduleName: string]: ModulePatcher[] } = {
    'babel-core': [hacks.patchBabelCore_githubIssue6577],
  }

  closestFileData(why: ImportReasons): TClosestFileData {
    return importDefault(this._import(why, 'closest-file-data')).default
  }

  typeScript(why: ImportReasons): TTypeScript {
    return this._import(why, 'typescript')
  }

  babelJest(why: ImportReasons): TBabelJest {
    // this is to ensure babel-core is patched
    this.tryThese('babel-core')
    return this._import(why, 'babel-jest')
  }

  babelCore(why: ImportReasons): TBabelCore {
    return this._import(why, '@babel/core', {
      alternatives: ['babel-core'],
      installTip: [
        // as in https://github.com/facebook/jest/tree/master/packages/babel-jest
        {
          label: 'for Babel 7',
          module: `babel-jest 'babel-core@^7.0.0-0' @babel/core`,
        },
        { label: 'for Babel 6', module: 'babel-jest babel-core' },
      ],
    })
  }

  @Memoize((...args: string[]) => args.join(':'))
  tryThese(moduleName: string, ...fallbacks: string[]): any {
    let name: string
    let loaded: any
    const tries = [moduleName, ...fallbacks]
    // tslint:disable-next-line:no-conditional-assignment
    while ((name = tries.shift() as string) !== undefined) {
      try {
        loaded = require(name)
        break
      } catch (err) {}
    }

    return loaded && this._patch(name, loaded)
  }

  @Memoize(name => name)
  protected _patch<T>(name: string, unpatched: T): T {
    if (name in this._patches) {
      return this._patches[name].reduce(
        (mod, patcher) => patcher(mod),
        unpatched,
      )
    }
    return unpatched
  }

  protected _import(
    why: string,
    moduleName: string,
    { alternatives = [], installTip = moduleName }: ImportOptions = {},
  ): any {
    // try to load any of the alternative after trying main one
    const res = this.tryThese(moduleName, ...alternatives)
    // if we could load one, return it
    if (res) {
      return res
    }

    // if it couldn't load, build a nice error message so the user can fix it by himself
    const msg = alternatives.length
      ? Errors.UnableToLoadAnyModule
      : Errors.UnableToLoadOneModule
    const loadModule = [moduleName, ...alternatives]
      .map(m => `"${m}"`)
      .join(', ')
    if (typeof installTip === 'string') {
      installTip = [{ module: installTip, label: `install "${installTip}"` }]
    }
    const fix = installTip
      .map(tip => {
        return `    ${installTip.length === 1 ? '↳' : '•'} ${interpolate(
          Helps.FixMissingModule,
          tip,
        )}`
      })
      .join('\n')

    throw new Error(
      interpolate(msg, {
        module: loadModule,
        reason: why,
        fix,
      }),
    )
  }
}

export default new Importer()
