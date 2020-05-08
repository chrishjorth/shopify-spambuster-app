import {
  RCSITEKEY_CHANGE,
  RCSITESECRET_CHANGE
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
