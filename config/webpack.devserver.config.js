'use strict'

const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

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
        publicPath: '/',
        historyApiFallback: true,
        watchOptions: {
           poll: true
       }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    optimization: {
        namedModules: true,
        noEmitOnErrors: true,
    }
})
