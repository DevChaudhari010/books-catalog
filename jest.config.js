module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@types$": "<rootDir>/src/types/index.ts",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
    "^@lib$": "<rootDir>/src/lib/index.ts",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@models$": "<rootDir>/src/models/index.ts",
    "^@models/(.*)$": "<rootDir>/src/models/$1",
    "^@controllers$": "<rootDir>/src/controllers/index.ts",
    "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
};
