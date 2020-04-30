import React from 'react'
import { connect } from 'react-redux'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

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
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </Router>
    </>
  )
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)
export default App
