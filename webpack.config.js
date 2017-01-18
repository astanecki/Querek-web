var webpack = require("webpack");

var HtmlWebpackPlugin = require('html-webpack-plugin'); // for generating HTML with needed scripts/styles
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // for moving styles out from the bundle.js to bundle.css

var CONFIG = require('./app.config.js');

var path = require('path');

// Use:
// https://www.npmjs.com/package/copy-webpack-plugin when index.html should be copied

module.exports = {
    entry: './src/js/App.jsx',
    output: {
        path: 'dist',
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }, {
            test: /\.jsx?$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }]
    },
    //externals: {
    //    //don't bundle the 'react' npm package with our bundle.js
    //    //but get it from a global 'React' variable
    //    'react': 'React'
    //},
    resolve: {
        alias: {
            // helps with madness about a few version of react in node_modules (probably in material-ui
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
    //    //new webpack.optimize.UglifyJsPlugin({
    //    //    compress: {
    //    //        warnings: false
    //    //    },
    //    //    output: {
    //    //        comments: false
    //    //    }
    //    //}),
    //    new HtmlWebpackPlugin({
    //        title: CONFIG.APP.TITLE
    //    }),
        new ExtractTextPlugin("bundle.css", {allChunks: true})
    ]
};