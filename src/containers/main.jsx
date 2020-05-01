import React from 'react'
import { connect } from 'react-redux'
import { Page, Card, Button } from '@shopify/polaris'

export const mapStateToProps = (state, props) => {
  return {
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const ConnectedMain = (props) => {
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
