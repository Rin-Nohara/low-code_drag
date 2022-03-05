const { override, addWebpackAlias, addBabelPlugins } = require('customize-cra')
const path = require('path')

module.exports = override(
    //配置路径别名
    addWebpackAlias({
        ['@']: path.resolve(__dirname, './src'),
    }),
    (config) => {
        return config
    },
    ...addBabelPlugins(
        ['styled-jsx/babel', { "optimizeForSpeed": true }],
    ),
)