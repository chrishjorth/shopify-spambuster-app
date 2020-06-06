import {
  RCSITEKEY_CHANGE,
  RCSITESECRET_CHANGE,

  ERROR_DISMISS,
  SUCCESS_DISMISS
} from '../constants.js'

export const handleRcSiteKeyChange = (value) => {
  return {
    type: RCSITEKEY_CHANGE,
    payload: {
      value: value
    }
  }
}

export const handleRcSiteSecretChange = (value) => {
  return {
    type: RCSITESECRET_CHANGE,
    payload: {
      value: value
    }
  }
}

export const dismissError = () => {
  return {
    type: ERROR_DISMISS,
    payload: {}
  }
}

export const dismissSuccess = () => {
  return {
    type: SUCCESS_DISMISS,
    payload: {}
  }
}
