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
  handleRcSiteKeyChange,
  handleRcSiteSecretChange
} from '../actions/interface.js'
import {
  install
} from '../actions/network.js'

export const mapStateToProps = (state, props) => {
  return {
    rcSiteKey: state.root.get('rcSiteKey'),
    rcSiteSecret: state.root.get('rcSiteSecret')
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRcSiteKeyChange: (value) => dispatch(handleRcSiteKeyChange(value)),
    handleRcSiteSecretChange: (value) => dispatch(handleRcSiteSecretChange(value)),
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
          <TextField
            value={props.rcSiteSecret}
            onChange={props.handleRcSiteSecretChange}
            label='reCAPTCHA secret key'
          />
          <Button submit>Install Spambuster</Button>
        </FormLayout>
      </Form>
    </Card>
  )
}

const NoScriptInstalledView = connect(mapStateToProps, mapDispatchToProps)(ConnectedNoScriptInstalledView)
export default NoScriptInstalledView
