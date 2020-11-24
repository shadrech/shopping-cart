const moduleNameMapper = require('tsconfig-paths-jest')(require('./tsconfig.json'));

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper,
  rootDir: 'src',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['../node_modules'],
  moduleDirectories: [
    '../node_modules',
    'jest',
    __dirname
  ]
};
