import { Map } from 'immutable'

import {
  APPSTATUS_GET_START,
  APPSTATUS_GET_DONE,
  INSTALL_GET_START,
  INSTALL_GET_DONE,

  RCSITEKEY_CHANGE,
  RCSITESECRET_CHANGE
} from '../constants.js'

export const getInitialState = () => {
  return Map({
    isLoading: true, // To avoid displaying data prematurely

    hasScriptTag: false,

    rcSiteKey: '',
    rcSiteSecret: ''
  })
}

const rootReducer = (state, action) => {
  if (!state) {
    state = getInitialState()
  }
  switch (action.type) {
    case APPSTATUS_GET_START:
    case INSTALL_GET_START:
      state = state.set('isLoading', true)
      return state
    case APPSTATUS_GET_DONE:
      state = state.set('hasScriptTag', action.payload.hasScriptTag)
      state = state.set('isLoading', false)
      return state
    case INSTALL_GET_DONE:
      state = state.set('hasScriptTag', true)
      state = state.set('isLoading', false)
      return state

    case RCSITEKEY_CHANGE:
      state = state.set('rcSiteKey', action.payload.value)
      return state
    case RCSITESECRET_CHANGE:
      state = state.set('rcSiteSecret', action.payload.value)
      return state
  }
  return state
}

export default rootReducer
