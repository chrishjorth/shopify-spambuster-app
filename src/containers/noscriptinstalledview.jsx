import React from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Button
} from '@shopify/polaris'

export const mapStateToProps = (state, props) => {
  return {
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const ConnectedNoScriptInstalledView = (props) => {
  return (
    <Card sectioned>
      <Button onClick={() => window.alert('Button clicked!')}>Example button</Button>
    </Card>
  )
}

const NoScriptInstalledView = connect(mapStateToProps, mapDispatchToProps)(ConnectedNoScriptInstalledView)
export default NoScriptInstalledView
