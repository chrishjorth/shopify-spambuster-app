import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'

const render = () => {
  const App = require('./containers/app.jsx').default
  const rootEl = document.getElementById('react-app')

  if (rootEl) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      rootEl
    )
  } else {
    if (process && process.env.NODE_ENV !== 'test') {
      console.error('React root element not found.')
    }
  }
}

const hmrCallback = () => {
  setTimeout(render)
}

const startHMR = (hmr) => {
  if (hmr) {
    hmr.accept('./containers/app.jsx', hmrCallback)
  }
}

startHMR(module.hot)
render()

export default {
  render: render,
  startHMR: startHMR,
  hmrCallback: hmrCallback
}
