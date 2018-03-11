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
        contentBase: 'dist'
    }
}
