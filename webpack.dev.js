const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.js');
module.exports = merge(common, {
    output: {
        path:  "/",
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
        new HtmlWebpackPlugin({
            title: '测试啊',
            template: 'index.html',
            filename: 'index.html',
            hash:true,
            chunks: ["index"],
        })
    ],
    devtool: 'inline-source-map'
});