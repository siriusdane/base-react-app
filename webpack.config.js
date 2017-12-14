const path = require('path'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    publicPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        path: publicPath
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new extractTextPlugin('dist/bundle.css', { allChunks: true })
    ],
    devServer: {
        contentBase: publicPath,
        historyApiFallback: true
    }
};
