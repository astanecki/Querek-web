var webpack = require("webpack");

var HtmlWebpackPlugin = require('html-webpack-plugin'); // for generating HTML with needed scripts/styles
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // for moving styles out from the bundle.js to bundle.css

var CONFIG = require('./app.config.js');

var path = require('path');

// Use:
// https://www.npmjs.com/package/copy-webpack-plugin when index.html should be copied

module.exports = {
    entry: './src/js/index.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")

        },{
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        alias: {
            // helps with madness about a few version of react in node_modules (probably in material-ui
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("bundle.css", {allChunks: true})
    ]
};