const path = require("path");
const VueLoderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports= {
    entry:{
        index:'./src/main.js',
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
                use:[
                    'babel-loader'
                ]
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
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'index.html',
            filename: 'index.html',
            hash:true,
            chunks: ["index"],
        })
    ]


}