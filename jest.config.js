module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: '<rootDir>/__tests__/setup.ts',

  // The glob patterns Jest uses to detect test files
  // I've changed this slightly so we can have some config
  // JS files in our test directory without an issue
  testMatch: ['**/__tests__/**/*.(spec|test).ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
}
