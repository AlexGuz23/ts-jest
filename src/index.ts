import { LogContexts, LogLevels } from 'bs-logger'
import { readFileSync } from 'fs'
import { resolve } from 'path'

import { createJestPreset as createJestPresetCore } from './presets/create-jest-preset'
import { pathsToModuleNameMapper as pathsToModuleNameMapperCore } from './config/paths-to-module-name-mapper'
import { TsJestTransformer } from './ts-jest-transformer'
import type { TsJestGlobalOptions } from './types'
import { rootLogger } from './utils/logger'
import { Deprecations, interpolate } from './utils/messages'
import { mocked as mockedCore } from './utils/testing'
import { VersionCheckers } from './utils/version-checkers'

declare module '@jest/types' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Config {
    interface ConfigGlobals {
      'ts-jest': TsJestGlobalOptions
    }
  }
}

// deprecate helpers
const warn = rootLogger.child({ [LogContexts.logLevel]: LogLevels.warn })
const helperMoved = <T extends (...args: any[]) => any>(name: string, helper: T) =>
  warn.wrap(interpolate(Deprecations.HelperMovedToUtils, { helper: name }), helper)

/** @deprecated */
export const mocked = helperMoved('mocked', mockedCore)
/** @deprecated */
export const createJestPreset = helperMoved('createJestPreset', createJestPresetCore)
/** @deprecated */
export const pathsToModuleNameMapper = helperMoved('pathsToModuleNameMapper', pathsToModuleNameMapperCore)
/**
 * @internal
 */
export const version: string = require('../package.json').version
/**
 * @internal
 */
export const digest: string = readFileSync(resolve(__dirname, '..', '.ts-jest-digest'), 'utf8')

export function createTransformer(): TsJestTransformer {
  VersionCheckers.jest.warn()

  return new TsJestTransformer()
}
