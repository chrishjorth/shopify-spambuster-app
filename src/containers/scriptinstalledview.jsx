import React from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Form,
  FormLayout,
  TextField,
  Button,
  Banner
} from '@shopify/polaris'

import {
  handleRcSiteKeyChange,
  handleRcSiteSecretChange,
  dismissError
} from '../actions/interface.js'
import {
  update
} from '../actions/network.js'

export const mapStateToProps = (state, props) => {
  return {
    rcSiteKey: state.root.get('rcSiteKey'),
    rcSiteSecret: state.root.get('rcSiteSecret'),
    errorMessage: state.root.get('errorMessage')
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRcSiteKeyChange: (value) => dispatch(handleRcSiteKeyChange(value)),
    handleRcSiteSecretChange: (value) => dispatch(handleRcSiteSecretChange(value)),
    updateKeySecret: () => dispatch(update()),
    dismissError: () => dispatch(dismissError())
  }
}

// TODO: Test case of bad recaptcha keys
export const ConnectedScriptInstalledView = (props) => {
  // Add:
  // - Enable disable spambusting
  // - Update recaptcha keys

  const handleUpdateKeySecret = () => {
    props.updateKeySecret()
  }

  const handleDismissError = () => {
    props.dismissError()
  }

  return (
    <>
      <Card sectioned>
        <p>
          ReCAPTCHA spambuster is installed.
        </p>
        <p>
          Your blog comment form on article pages will now include reCAPTCHA v3 invisible verification. This can be confirmed by the text added under the submit button, which is mandated by the Google reCAPTCHA v3 licence. Any comments that do not pass the recaptcha verification will not be submitted.
        </p>
        <p>
          Any comments that are not created by submission via the Shopify comment form displayed on blog article pages will be marked as spam. Bots typically go around the form avoiding reCAPTCHA. The best we can do is to mark them as spam accordingly.
        </p>
      </Card>
      <Card title='Update reCAPTCHA details' sectioned>
        {props.errorMessage !== '' ? (
          <Banner onDismiss={handleDismissError} status='critical'>
            <p>props.errorMessage</p>
          </Banner>
        ) : null}
        <Form onSubmit={handleUpdateKeySecret}>
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
            <Button submit>Update</Button>
          </FormLayout>
        </Form>
      </Card>
    </>
  )
}

const ScriptInstalledView = connect(mapStateToProps, mapDispatchToProps)(ConnectedScriptInstalledView)
export default ScriptInstalledView
