import React from 'react'
import { connect } from 'react-redux'
import { TitleBar } from '@shopify/app-bridge-react'

export const mapStateToProps = (state, props) => {
  return {
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const ConnectedMain = (props) => {
  const primaryAction = { content: 'Foo', url: '/foo' }
  const secondaryActions = [{ content: 'Bar', url: '/bar' }]
  const actionGroups = [{ title: 'Baz', actions: [{ content: 'Baz', url: '/baz' }] }]

  return (
    <>
      <TitleBar
        title='Hello world!'
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
        actionGroups={actionGroups}
      />
    </>
  )
}

const Main = connect(mapStateToProps, mapDispatchToProps)(ConnectedMain)
export default Main
