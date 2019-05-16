'use strict'

const webpack = require('webpack')
const baseConfig = require('./webpack.config.prod.js')
const merge = require('webpack-merge')


const HOST = 'localhost'
const PORT = 8080

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',

    serve: {
        LogLevel: 'warn',
        hot: true,
        content: 'dist',
        host: HOST,
        port: PORT,
        open: true,
        historyApiFallback: true

    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ]
    },

    optimization: {
        namedModules: true,
        noEmitOnErrors: true,
    }
})
