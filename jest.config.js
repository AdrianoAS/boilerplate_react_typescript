module.exports = {
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTest.ts'],
  moduleDirectories: ["node_modules", 'src'],
  testPathIgnorePatterns: ['node_modules/', '/.next/', '/.out/', '/.public/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': "<rootDir>/node_modules/babel-jest",
  },

  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/**/stories.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules",
  ],
  coverageReporters: ["lcov", "json"],
  coverageDirectory: 'coverage',

}
