module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/*.test.js'],
  coverageDirectory: './coverage',
  coverageReporters: ['lcov', 'text'],
  testResultsProcessor: '@sonarqube/community-sonarqube-javascript'
};
