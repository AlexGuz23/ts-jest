declare var jest, describe, it, expect;

import { checkStrict } from '../Strict';

describe('Invalid Strict', () => {
  it('should throw an error on line 9', () => {
    checkStrict();
  });
});
