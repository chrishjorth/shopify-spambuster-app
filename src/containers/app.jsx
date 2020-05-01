import React from 'react'
import { connect } from 'react-redux'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from '@shopify/app-bridge-react'

import Main from './main.jsx'

export const mapStateToProps = (state) => {
  return {
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const ConnectedApp = (props) => {
  const config = {
    apiKey: props.apiKey,
    shopOrigin: props.shop
  }
  return (
    <>
      <Provider config={config}>
        <Router>
          <Switch>
            <Route path='/' component={Main} />
          </Switch>
        </Router>
      </Provider>
    </>
  )
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)
export default App
