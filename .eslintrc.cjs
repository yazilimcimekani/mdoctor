module.exports = {
    env: {
        browser: false,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:security/recommended',
        'prettier',
        'plugin:jest/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {}
};
