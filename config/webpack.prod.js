const merge = require('webpack-merge');
const path = require("path");
const common = require('./webpack.config.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
    mode:"development",
    output: {
        path:path.resolve(__dirname ,"../dist"),
        filename: "[name].js"
    },
    plugins: [

    ],
    devtool: 'inline-source-map'
});