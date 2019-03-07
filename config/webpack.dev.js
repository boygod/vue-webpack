const merge = require('webpack-merge');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.js');
module.exports = merge(common, {
    mode:"production",
    output: {
        path:  path.resolve(__dirname ,"../dist"),
        filename: "[name].js"
    },
    devServer: {
        host: 'localhost',
        port: 4567,
        open: true,
        contentBase: './',
        inline: true,
    },
    plugins: [
    
    ],
    devtool: 'inline-source-map'
});