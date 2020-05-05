import React from 'react'
import { connect } from 'react-redux'
import {
  Card
} from '@shopify/polaris'

export const mapStateToProps = (state, props) => {
  return {
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const ConnectedScriptInstalledView = (props) => {
  return (
    <Card sectioned>
      Script installed
    </Card>
  )
}

const ScriptInstalledView = connect(mapStateToProps, mapDispatchToProps)(ConnectedScriptInstalledView)
export default ScriptInstalledView
