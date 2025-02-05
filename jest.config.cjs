module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.png$': 'jest-transform-stub',
    '^.+\\.svg$': 'jest-transform-stub',
    '^.+\\.scss$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'], // Add this line
};
