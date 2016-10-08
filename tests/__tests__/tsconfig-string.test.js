'use strict';

jest.mock('path');

describe('get ts config from string', () => {

  beforeEach(() => {
    // Set up some mocked out file info before each test
    require('path').__setBaseDir('./tests/tsconfig-string');
  });

  it('should correctly read my-tsconfig.json', () => {
    const {getTSConfig} = require('../../utils');
    const result = getTSConfig({
      "__TS_CONFIG__": "my-tsconfig.json"
    });

    expect(result).toEqual ({
      "sourceMap": false,
      "declaration": false,
      "target": 2,
      "module": 1,
      "moduleResolution": 2,
      "noEmitOnError": true,
      "noFallthroughCasesInSwitch": true,
      "noImplicitAny": false,
      "noImplicitReturns": true,
      "removeComments": true,
      "strictNullChecks": true,
      "jsx": 2,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "allowSyntheticDefaultImports": false
    });

  });

});