module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: [
        './setupTests.ts'
    ],
    testMatch: [
        '**/__tests__/**.test.tsx'
    ],
    moduleNameMapper: {
        '.+\\.(png|jpg|gif|svg|ttf|css)$': 'identity-obj-proxy'
    }
};
