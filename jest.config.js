module.exports = {
    preset: 'jest-expo',
    setupFiles: ['<rootDir>/jest.setup.ts'],
    transform: {
        '\\.[jt]sx?$': ['babel-jest', { caller: { preserveEnvVars: true } }]
    },
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    },
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|react-navigation|@react-navigation|react-native-reanimated|' +
        'react-native-gesture-handler|react-native-screens|react-native-safe-area-context|@react-native|' +
        'react-redux|expo-modules-core|expo|@expo|@unimodules|@expo/vector-icons|expo-font|expo-asset|' +
        'expo-constants|expo-router|expo-splash-screen|expo-linking|expo-status-bar|expo-secure-store|' +
        '@gluestack-ui|react-native-css-interop|react-native-root-toast|react-native-root-siblings)/)'
    ]
};
