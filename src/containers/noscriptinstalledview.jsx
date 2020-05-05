import React from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Form,
  FormLayout,
  TextField,
  Button
} from '@shopify/polaris'

import {
  handleRcSiteKeyChange
} from '../actions/interface.js'
import {
  install
} from '../actions/network.js'

export const mapStateToProps = (state, props) => {
  return {
    rcSiteKey: state.root.get('rcSiteKey')
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRcSiteKeyChange: (value) => dispatch(handleRcSiteKeyChange(value)),
    install: () => dispatch(install())
  }
}

export const ConnectedNoScriptInstalledView = (props) => {
  const handleSubmit = () => {
    props.install()
  }

  return (
    <Card sectioned>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={props.rcSiteKey}
            onChange={props.handleRcSiteKeyChange}
            label='reCAPTCHA site key'
          />
          <Button submit>Install Spambuster</Button>
        </FormLayout>
      </Form>
    </Card>
  )
}

const NoScriptInstalledView = connect(mapStateToProps, mapDispatchToProps)(ConnectedNoScriptInstalledView)
export default NoScriptInstalledView
