// jest.config.js
module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    testMatch: [
      '**/src/components/__tests__/**/*.spec.(js|jsx|ts|tsx)'
    ],
    collectCoverage: false,
    collectCoverageFrom: [
      'src/**/*.{js,vue}',
      '!src/main.js',
      '!**/node_modules/**'
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
  };
  