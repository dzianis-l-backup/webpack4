import 'babel-runtime/regenerator'
import './main.css'
import './index.html'
/** websocket connection*/
import 'webpack-hot-middleware/client?reload=true'


const f = async args => {
    const {a,b} = args
    await console.log('Hello from ES6',a,b)
    console.log('It\'s done')
}

f({a:1,b:2})
