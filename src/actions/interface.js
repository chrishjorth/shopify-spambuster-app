import {
  RCSITEKEY_CHANGE
} from '../constants.js'

export const handleRcSiteKeyChange = (value) => {
  return {
    type: RCSITEKEY_CHANGE,
    payload: {
      value: value
    }
  }
}
