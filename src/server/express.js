import config from '../../config/webpack.dev.js'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddlewareFunc from 'webpack-dev-middleware'
import webpackHotMiddlewareFunc from 'webpack-hot-middleware'

/** server instance creation*/
const server = express()

/** webpack + config*/
const compiler = webpack(config)

/** middleware that recompiles if smth has been changed*/
const webpackDevMiddleware = webpackDevMiddlewareFunc(compiler, config.devServer)

/** webpack hot reloading middleware*/
const webpackHotMiddleware = webpackHotMiddlewareFunc(compiler)

/** middleware usage*/
server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)

/**
 * middleware creation,
 * directory to be served as just static sources*/
const staticMiddleware = express.static('dist')
server.use(staticMiddleware)
server.listen(8000, ()=> {
    console.log('Server is listening')
})
