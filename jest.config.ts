export default {
  clearMocks: true,
  preset: 'ts-jest/presets/default-esm',

  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/public/**',
    '!**/mocks/**',
    '!**/dist/**',
    '!webpack.config.js',
    '!postcss.config.js',
    '!.eslintrc.js'
  ],

  transform: {
    '\\.(js|jsx|ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        useESM: true,
        diagnostics: true
      }
    ]
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/mocks/style.js'
  }
}
