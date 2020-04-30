import React from 'react'
import { connect } from 'react-redux'

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
      <div>Hello, universes! React here.</div>
    </>
  )
}

const Main = connect(mapStateToProps, mapDispatchToProps)(ConnectedMain)
export default Main
