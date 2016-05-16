/*
 * 生产模式配置
 * */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: [
            './src/index'
        ],
        vendors: ['react']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: [
            '',
            '.js',
            '.jsx',
            '.less',
            '.css',
            '.html'
        ]
    },
    devtool: 'source-map',
    plugins: [
        //提公用js到common.js文件中
        new webpack.optimize.CommonsChunkPlugin('vendors', 'common.js',Infinity),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
     module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.resolve('src')
        }, {
            test: /\.less$/,
            loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]!less',
            include: path.resolve('src/css')
        }, {
            test: /\.(gif|png|jpg)$/,
            loader: 'url-loader?limit=8192',
            include: path.resolve('src/img')
        }, {
            test: /\.(ttf|woff|eot|svg)$/,
            loader: 'file-loader?limit=8192',
            include: path.resolve('src/font')
        }]
    }

};
