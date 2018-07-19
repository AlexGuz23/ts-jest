/**
 * Postprocess step. Based on babel-jest: https://github.com/facebook/jest/blob/master/packages/babel-jest/src/index.js
 * https://github.com/facebook/jest/blob/9b157c3a7c325c3971b2aabbe4c8ab4ce0b0c56d/packages/babel-jest/src/index.js
 */
import * as __types__babel from 'babel-core';
import __types__istanbulPlugin from 'babel-plugin-istanbul';
import * as __types__jestPreset from 'babel-preset-jest';
let babel: typeof __types__babel;
let istanbulPlugin: typeof __types__istanbulPlugin;
let jestPreset: typeof __types__jestPreset;
function importBabelDeps() {
  if (babel) {
    return;
  }
  babel = require('@babel/core');
  istanbulPlugin = require('babel-plugin-istanbul').default;
  jestPreset = require('babel-preset-jest');
}
import { CompilerOptions } from 'typescript';
import {
  BabelTransformOptions,
  PostProcessHook,
  JestCacheKeyOptions,
  TsJestConfig,
} from './types';
import { logOnce } from './utils/logger';

// Function that takes the transpiled typescript and runs it through babel/whatever.
export function postProcessCode(
  compilerOptions: CompilerOptions,
  jestConfig: jest.ProjectConfig,
  tsJestConfig: TsJestConfig,
  transformOptions: jest.TransformOptions,
  transpileOutput: jest.TransformedSource,
  filePath: string,
): jest.TransformedSource {
  const postHook = getPostProcessHook(
    compilerOptions,
    jestConfig,
    tsJestConfig,
  );

  return postHook(transpileOutput, filePath, jestConfig, transformOptions);
}

function createBabelTransformer(
  options: BabelTransformOptions,
): PostProcessHook {
  importBabelDeps();
  options = {
    ...options,
    plugins: options.plugins || [],
    presets: (options.presets || []).concat([jestPreset]),
  };
  delete options.cacheDirectory;
  delete options.filename;

  return (
    codeSourcemapPair: jest.TransformedSource,
    filename: string,
    config: jest.ProjectConfig,
    transformOptions: JestCacheKeyOptions,
  ): jest.TransformedSource => {
    const theseOptions = Object.assign(
      { filename, inputSourceMap: codeSourcemapPair.map },
      options,
    );
    if (transformOptions && transformOptions.instrument) {
      theseOptions.auxiliaryCommentBefore = ' istanbul ignore next ';
      // Copied from jest-runtime transform.js
      theseOptions.plugins = theseOptions.plugins.concat([
        [
          istanbulPlugin,
          {
            // files outside `cwd` will not be instrumented
            cwd: config.rootDir,
            exclude: [],
          },
        ],
      ]);
    }

    // we typecast here because babel returns a more complete object than the one expected by jest
    return babel.transform(
      codeSourcemapPair.code,
      theseOptions,
    ) as jest.TransformedSource;
  };
}

export const getPostProcessHook = (
  tsCompilerOptions: CompilerOptions,
  jestConfig: jest.ProjectConfig,
  tsJestConfig: TsJestConfig,
): PostProcessHook => {
  if (tsJestConfig.skipBabel) {
    logOnce('Not using any postprocess hook.');
    // Identity function
    return input => input;
  }

  const plugins = Array.from(
    (tsJestConfig.babelConfig && tsJestConfig.babelConfig.plugins) || [],
  );

  const babelOptions: BabelTransformOptions = {
    ...tsJestConfig.babelConfig,
    babelrc: tsJestConfig.useBabelrc || false,
    plugins,
    presets: tsJestConfig.babelConfig ? tsJestConfig.babelConfig.presets : [],
    sourceMaps: tsJestConfig.disableSourceMapSupport !== true,
  };

  logOnce('Using babel with options:', babelOptions);

  return createBabelTransformer(babelOptions);
};
