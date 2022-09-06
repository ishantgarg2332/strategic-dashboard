module.exports = {
  testTimeout: 20000,
  'collectCoverage': true,
  'collectCoverageFrom': [
  'src/**/**',
  '!**/AppRoutes.tsx',
  '!**/index.ts',
  '!**/index.tsx',
  ],
  'coverageDirectory': 'dashboard/unit-testing',
  'coveragePathIgnorePatterns': [
  '.*__snapshots__/.*',
  ],
  'coverageReporters': ['json', 'lcov', 'text', 'text-summary'],
  'coverageThreshold': {
  'global': {
  'branches': 80,
  'functions': 80,
  'lines': 80,
  'statements': 80,
  },
  },
  'moduleFileExtensions': ['js', 'jsx', 'ts', 'tsx'],
  'moduleNameMapper': {
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  '<rootDir>/__mocks__/file-mock.js',
  '^@/(.*)$': '<rootDir>/src/$1',
  },
  'roots': ['src/'],
  'setupFiles': [
  '<rootDir>/__mocks__/fetch-mock.js',
  '<rootDir>/__mocks__/window-mock.js',
  '<rootDir>/__mocks__/xhr-mock.js',
  ],
  'setupFilesAfterEnv': ['<rootDir>/setupTests.js'],
  'testEnvironment': 'jsdom',
  'testURL': 'http://localhost/',
  'timers': 'fake',
  'verbose': false,
  };