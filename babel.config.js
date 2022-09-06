module.exports = {
    parserOpts: {
    plugins: ['jsx'],
    },
    presets: [
    [
    '@babel/preset-env',
    {
    bugfixes: true,
    corejs: '3.9.1',
    targets: '> 0.25%, not dead',
    useBuiltIns: 'usage',
    },
    ],
    [
    '@babel/preset-react',
    {
    runtime: 'automatic',
    },
    ],
    ['@babel/preset-typescript'],
    ],
    plugins: [
    [
    '@babel/plugin-transform-react-jsx',
    {
    runtime: 'automatic',
    },
    ],
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
    'babel-plugin-transform-react-class-to-function',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    'transform-react-remove-prop-types',
    '@babel/plugin-transform-runtime',
    ],
    env: {
    development: {
    plugins: [],
    presets: [],
    },
    production: {
    plugins: [],
    presets: [],
    },
    test: {
    plugins: [],
    presets: [],
    },
    },
    };