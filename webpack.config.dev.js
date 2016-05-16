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
    //devtool: 'eval-source-map', //形式直接显示你出错代码的位置
    plugins: [
        new webpack.NoErrorsPlugin(),
        //提公用js到common.js文件中
        new webpack.optimize.CommonsChunkPlugin('vendors', 'common.js', Infinity),
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
