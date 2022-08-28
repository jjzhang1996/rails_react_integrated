process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const environment = require('./environment')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

environment.plugins.append(
    'ForkTsCheckerWebpackPlugin',
    new ForkTsCheckerWebpackPlugin({
        typescript: {
            configFile: path.resolve(__dirname, '../../tsconfig.json'),
        },
        // non-async type checking will block compilation on errors
        async: false,
    }),
)

module.exports = environment.toWebpackConfig()