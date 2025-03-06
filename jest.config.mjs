export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^.+\\.css$": "jest-transform-stub"
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!your-module-name-to-transform|another-module).+\\.js$"
  ],
  moduleNameMapper: {
    "\\.css$": "jest-transform-stub"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"]
};
