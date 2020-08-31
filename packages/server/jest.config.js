module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/mocks/**',
    '!index.js',
    '!jest.config.js',
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 90,
  //     functions: 90,
  //     lines: 90,
  //     statements: 90,
  //   },
  // },
}
