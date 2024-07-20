module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
  };
  