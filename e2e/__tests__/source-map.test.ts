import { configureTestCase } from '../__helpers__/test-case'
import { allPackageSets } from '../__helpers__/templates'

const testCase = configureTestCase('source-maps', {
  writeIo: true,
})

testCase.runWithTemplates(allPackageSets, 1, (runTest, { templateName }) => {
  describe(`using template "${templateName}"`, () => {
    const result = runTest()
    it(`should report correct line numbers`, () => {
      expect(result.status).toBe(1)
      expect(result).toMatchSnapshot()
    })

    // when there are some issues with debugging, it's usually becasue source mpas are not inlined
    // and the debugger cannot find the line where to go
    it(`should have the source mpas comment`, () => {
      expect(result.ioDataFor('main.ts').outNormalized).toMatchSnapshot()
    })
  })
})
