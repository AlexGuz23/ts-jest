module.exports = {
  rootDir: './test',
  transform: {
    '\\.ts$': '<rootDir>/../dist/index.js',
  },
  testRegex: '/.+\\.spec\\.ts$',
  collectCoverageFrom: ['<rootDir>/../src/**/*.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testEnvironment: 'node',
};
