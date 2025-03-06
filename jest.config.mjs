export default {
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!your-module-name-to-transform|another-module).+\\.js$"
  ],
  moduleNameMapper: {
    "\\.css$": "jest-transform-stub",
    "\\.svg$": "jest-transform-stub"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"]
};
