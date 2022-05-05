/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  globals: {
    'ts-jest': {
      // Relative path from the folder where jest.config.js is located
      astTransformers: { before: ['ts-jest-keys-transformer.js'] },
    },
  }
};