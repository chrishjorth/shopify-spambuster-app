import { Map } from 'immutable'

import {
  APPSTATUS_GET_START,
  APPSTATUS_GET_DONE,
  INSTALL_GET_START,
  INSTALL_GET_DONE,
  UPDATE_POST_START,
  UPDATE_POST_DONE,

  RCSITEKEY_CHANGE,
  RCSITESECRET_CHANGE,

  NETWORK_WARNING_SHOW,
  ERROR_DISMISS
} from '../constants.js'

export const getInitialState = () => {
  return Map({
    isLoading: true, // To avoid displaying data prematurely

    hasScriptTag: false,

    rcSiteKey: '',
    rcSiteSecret: '',

    errorMessage: ''
  })
}

const rootReducer = (state, action) => {
  if (!state) {
    state = getInitialState()
  }
  switch (action.type) {
    case APPSTATUS_GET_START:
    case INSTALL_GET_START:
    case UPDATE_POST_START:
      state = state.set('isLoading', true)
      return state
    case APPSTATUS_GET_DONE:
      state = state.set('hasScriptTag', action.payload.hasScriptTag)
      state = state.set('isLoading', false)
      return state
    case INSTALL_GET_DONE:
      state = state.set('hasScriptTag', true)
      state = state.set('rcSiteKey', '')
      state = state.set('rcSiteSecret', '')
      state = state.set('isLoading', false)
      return state
    case UPDATE_POST_DONE:
      state = state.set('rcSiteKey', '')
      state = state.set('rcSiteSecret', '')
      state = state.set('isLoading', false)
      return state

    case RCSITEKEY_CHANGE:
      state = state.set('rcSiteKey', action.payload.value)
      return state
    case RCSITESECRET_CHANGE:
      state = state.set('rcSiteSecret', action.payload.value)
      return state

    case NETWORK_WARNING_SHOW:
      state = state.set('errorMessage', action.payload.message)
      return state
    case ERROR_DISMISS:
      state = state.set('errorMessage', '')
      return state
  }
  return state
}

export default rootReducer
