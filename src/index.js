import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store.js'
import { post } from './utilities.js'

const BACKEND_URL = 'https://v7qqtjkwvj.execute-api.eu-west-1.amazonaws.com/dev'

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

const startReact = () => {
  startHMR(module.hot)
  render()
}

console.log(window.location.search)

const urlParams = new URLSearchParams(window.location.search)
const hmac = urlParams.get('hmac')
const shop = urlParams.get('shop')
const timestamp = urlParams.get('timestamp')

const code = urlParams.get('code')

const session = urlParams.get('session')

if (session === null && hmac !== null && shop !== null && timestamp !== null) {
  // First install
  const redirectURL = BACKEND_URL + '/install?hmac=' + hmac + '&shop=' + shop + '&timestamp=' + timestamp
  console.log(redirectURL)
  window.location.href = redirectURL
} else if (code !== null) {
  // Install confirmation
  const nonce = urlParams.get('state')

  post(BACKEND_URL + '/confirm', {
    code: code,
    nonce: nonce,
    hmac: hmac,
    shop: shop,
    timestamp: timestamp
  }).then(json => {
    console.log(json)
    if (json.message === 'Success') {
      startReact()
    }
  }).catch(error => {
    console.error(error)
  })
} else {
  console.log('Installed version running')
  startReact()
}

export default {
  render: render,
  startHMR: startHMR,
  hmrCallback: hmrCallback
}
