/*
 * 开发模式的配置
 * */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: [
            './src/index',
            'webpack-dev-server/client?http://localhost:5000',
            'webpack/hot/dev-server' //浏览器自动刷新配置   
        ],
        vendors: ['react']
    },
    devServer: {
        hot: true, //表示增加HotModuleReplacementPlugin插件，且将服务器切换到热模式中。注意点：不要再额外添加HotModuleReplacementPlugin
        proxy: {}
    },
    output: {
        path: __dirname, //打包输出的路径
        filename: '[name].bundle.js', //打包后的名字
        publicPath: '/dist/' //html引用路径，在这里是本地
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
    devtool: 'eval-source-map', //形式直接显示你出错代码的位置
    plugins: [
        new webpack.NoErrorsPlugin(),
        //提公用js到common.js文件中
        new webpack.optimize.CommonsChunkPlugin('vendors', 'common.js')
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.less$/,
            loader: 'style!css!less',
            include: path.resolve('css')
        }, {
            test: /\.(gif|png|jpg)$/,
            include: path.resolve('img'),
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(ttf|woff|eot|svg)$/,
            include: path.resolve('font'),
            loader: 'file-loader?limit=8192'
        }]
    }
};
