import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { BACKEND_URL } from './config.js'
import store from './store.js'
import { get, post } from './utilities.js'

const render = (apiKey, shop) => {
  const App = require('./containers/app.jsx').default
  const rootEl = document.getElementById('react-app')

  if (rootEl) {
    ReactDOM.render(
      <Provider store={store}>
        <App apiKey={apiKey} shop={shop} />
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

const startReact = (apiKey, shop) => {
  startHMR(module.hot)
  render(apiKey, shop)
}

console.log(window.location.search)
console.log(window.location.hash)

const urlParams = new URLSearchParams(window.location.search)
const hmac = urlParams.get('hmac')
const shop = urlParams.get('shop')
const timestamp = urlParams.get('timestamp')

const code = urlParams.get('code')

if (window.location.hash === '#install' && hmac !== null && shop !== null && timestamp !== null) {
  console.log('Installing...')
  // First install
  const redirectURL = BACKEND_URL + '/install' + window.location.search
  console.log(redirectURL)
  window.location.href = redirectURL
} else if (code !== null) {
  console.log('Confirming install...')
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
    if (json.apiKey) {
      // startReact(json.apiKey, shop)
      window.location.href = 'https://' + shop + '/admin/apps'
    }
  }).catch(error => {
    console.error(error)
  })
} else {
  console.log('Installed version running')
  get(BACKEND_URL + '/access' + window.location.search).then(json => {
    if (json.apiKey) {
      startReact(json.apiKey, shop)
    }
  }).catch(error => {
    console.error(error)
  })
}

export default {
  render: render,
  startHMR: startHMR,
  hmrCallback: hmrCallback
}
