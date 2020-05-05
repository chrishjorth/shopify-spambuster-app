import {
  get
} from '../utilities.js'
import {
  NETWORK_WARNING_SHOW,
  APPSTATUS_GET_DONE
} from '../constants.js'

export const handleError = (error, warningText) => {
  if (process && process.env.NODE_ENV !== 'test') {
    console.error(error)
  }
  return {
    type: NETWORK_WARNING_SHOW,
    payload: {
      message: warningText
    }
  }
}

export const getAppStatusDone = (statusData) => {
  console.log(statusData)
  return {
    type: APPSTATUS_GET_DONE,
    payload: {
    }
  }
}

export const getAppStatus = () => {
  return (dispatch) => {
    return get('/status')
      .then(json => {
        dispatch(getAppStatusDone(json))
      })
      .catch(error => {
        dispatch(handleError(error, 'Could not get status.'))
      })
  }
}
