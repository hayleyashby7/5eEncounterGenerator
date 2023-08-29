export default {
    testEnvironment: "jest-environment-jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./jest.setup.ts'],
};
