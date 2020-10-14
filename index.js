module.exports = {
    env: {
        node: true,
    },
    extends: ['plugin:prettier/recommended', 'eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        'linebreak-style': ['error', 'unix'],
        'no-async-promise-executor': 0,
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false,
            },
        ],
        'prettier/prettier': [
            'error',
            {
                semi: true,
                arrowParens: 'always',
                singleQuote: true,
                tabWidth: 4,
            },
        ],
    },
};
