module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: { 'ts-jest': { tsConfig: {}, diagnostics: { ignoreCodes: [5023] } } },
  cacheDirectory: './node_modules/.cache',
}
