const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    roots: ['<rootDir>'],
    moduleNameMapper: {
        "^@/pages/(.*)$": "<rootDir>/pages/$1",
        "^@/components/(.*)$": "<rootDir>/components/$1"
    },
    testEnvironment: "jest-environment-jsdom"
}

module.exports = createJestConfig(customJestConfig);