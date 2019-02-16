const merge = require('webpack-merge');
const path = require("path");
const common = require('./webpack.config.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
    output: {
        path:path.resolve(__dirname ,"dist"),
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: 'index.html',
            filename: 'index.html',
            hash: true,
            chunks: ["index"]
        }),
        new webpack.NamedModulesPlugin(),
    ],
    devtool: 'inline-source-map'
});