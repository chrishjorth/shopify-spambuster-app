import React from 'react'
import { connect } from 'react-redux'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import '@shopify/polaris/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json'
import { AppProvider } from '@shopify/polaris'

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
      <AppProvider i18n={enTranslations} config={config}>
        <Router>
          <Switch>
            <Route path='/' component={Main} />
          </Switch>
        </Router>
      </AppProvider>
    </>
  )
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)
export default App
