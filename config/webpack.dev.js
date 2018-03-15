const path = require('path')

module.exports = {
    entry: {
        /** always relative path, if array - concatenation*/
        main: ['./src/main.js']
    },
    /** webpack 4*/
    mode: 'development',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist',
        overlay: true,
    },

    /** loaders description*/
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' },
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    },
                    {
                        loader: 'extract-loader',
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    },
                ]
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    }
}
