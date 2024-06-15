export default {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'esbuild-jest'
  },
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};
