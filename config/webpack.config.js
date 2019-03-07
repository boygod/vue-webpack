const path = require("path");
const VueLoderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports= {
    entry:{
        index:path.resolve(__dirname ,"../src/main.js")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use:[
                    'vue-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoderPlugin(),
        new CleanWebpackPlugin(['dist'],{
            root:path.resolve(__dirname,"../")
        }),
        new HtmlWebpackPlugin({
            title: '首页',
            template: 'index.html',
            filename: 'index.html',
            hash: true,
            chunks: ["index"]
        }),
        new webpack.NamedModulesPlugin(),
    ]


}