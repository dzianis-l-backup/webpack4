import { AppContainer } from 'react-hot-loader'
import Counter from './counter.js'
import React from 'react'
import ReactDom from 'react-dom'

function render(Component) {
    ReactDom.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('react-root'))
}

render(Counter)

if (module.hot) {
    module.hot.accept('./counter.js', ()=> {
        const NewCounter = require('./counter.js').default
        render(NewCounter)
    })
}

