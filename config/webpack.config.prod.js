const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    entry: { app: './src/index.tsx' },

    output: {
        //filename: 'index.js',
        path: path.resolve(__dirname, '..', 'dist')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },

    module: {
        rules: [
            {
                test: [/\.ts$/, /\.tsx$/],
                exclude: /node_modules/,
                loader: 'babel-loader!ts-loader',
            },
            {
                test: [/\.js$/, /\.jsx$/],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 10000,
              }
            }
          },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './public/index.html',
          inject: true
        }),
    ]

}
