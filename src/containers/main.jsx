import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  Page,
  Spinner,
  Card,
  Button
} from '@shopify/polaris'

import {
  getAppStatus
} from '../actions/network.js'

export const mapStateToProps = (state, props) => {
  console.log('MAP STATE')
  return {
    isLoading: state.root.get('isLoading'),
    hasScriptTag: state.root.get('hasScriptTag')
  }
}

export const mapDispatchToProps = (dispatch) => {
  console.log('MAP DISPATCH')
  return {
    getAppStatus: () => dispatch(getAppStatus())
  }
}

export const ConnectedMain = (props) => {
  console.log('main render:')
  console.log(props)
  useEffect(() => {
    console.log('use effect')
    props.getAppStatus()
  }, [props.hasScriptTag])

  if (props.isLoading === true) {
    return (
      <Spinner accessibilityLabel='Spinner example' size='large' color='teal' />
    )
  }

  return (
    <>
      <Page title='Example app'>
        <Card sectioned>
          <Button onClick={() => window.alert('Button clicked!')}>Example button</Button>
        </Card>
      </Page>
    </>
  )
}

const Main = connect(mapStateToProps, mapDispatchToProps)(ConnectedMain)
export default Main
