const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode : 'development',
    entry:  {
        bundle: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: 'images/[name]][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Webpack 4 Starter',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'template.html'),
        }),
        new bundleAnalyzerPlugin(),
    ]

};
