import { Map } from 'immutable'

import {
  APPSTATUS_GET_START,
  APPSTATUS_GET_DONE,
  INSTALL_GET_START,
  INSTALL_GET_DONE,

  RCSITEKEY_CHANGE
} from '../constants.js'

export const getInitialState = () => {
  return Map({
    isLoading: false,

    hasScriptTag: false,

    rcSiteKey: ''
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
      state = state.set('isLoading', false)
      return state

    case RCSITEKEY_CHANGE:
      state = state.set('rcSiteKey', action.payload.value)
      return state
  }
  return state
}

export default rootReducer
