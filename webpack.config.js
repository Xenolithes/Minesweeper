const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const config = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
    ]
}

const minesweeper = Object.assign({}, config, {
    name:"minesweeper",
    entry: path.join(__dirname, 'client', 'app.jsx'),
    output: {
        path: path.join(__dirname, './public/minesweeper-dist'),
        filename: 'bundle.js'
    }
})

module.exports = [ minesweeper ];