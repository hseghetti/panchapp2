const webpack = require("webpack");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    context: __dirname,
    entry: {
        app: [
            './src/components/index.js',
            './src/styles/hello.scss'
        ]
    },
    output: {
        path: path.join(__dirname, 'src', 'build'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /(\.js|.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                // query: {
                //     presets: ['es2015', 'stage-2', 'react']
                // }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader", // Will inject the style tag if plugin fails
                    loader: "css-loader!sass-loader",
                })
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/index.html', to: 'index.html'}
        ]),
        //new webpack.NewWatchingPlugin(),
        new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true })
    ]
}