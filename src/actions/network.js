import {
  BACKEND_URL
} from '../config.js'
import {
  get,
  post
} from '../utilities.js'
import {
  NETWORK_WARNING_SHOW,
  APPSTATUS_GET_START,
  APPSTATUS_GET_DONE,
  INSTALL_GET_START,
  INSTALL_GET_DONE
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

export const getAppStatusStart = () => {
  return {
    type: APPSTATUS_GET_START,
    payload: {}
  }
}

export const getAppStatusDone = (statusData) => {
  console.log(statusData)
  return {
    type: APPSTATUS_GET_DONE,
    payload: {
      hasScriptTag: statusData.hasScriptTag
    }
  }
}

export const getAppStatus = () => {
  return (dispatch) => {
    dispatch(getAppStatusStart())
    get(BACKEND_URL + '/status' + window.location.search)
      .then(json => {
        dispatch(getAppStatusDone(json))
      })
      .catch(error => {
        dispatch(handleError(error, 'Could not get status.'))
      })
  }
}

export const installStart = () => {
  return {
    type: INSTALL_GET_START,
    payload: {}
  }
}

export const installDone = () => {
  return {
    type: INSTALL_GET_DONE,
    payload: {}
  }
}

export const install = () => {
  return (dispatch, getState) => {
    const rootState = getState().root
    const rcSiteKey = rootState.get('rcSiteKey')
    const rcSiteSecret = rootState.get('rcSiteSecret')
    const data = {
      rcSiteKey: rcSiteKey,
      rcSiteSecret: rcSiteSecret
    }
    dispatch(installStart())
    post(BACKEND_URL + '/setuprc' + window.location.search, data)
      .then(json => {
        if (json.success === true) {
          dispatch(installJS())
        } else {
          dispatch(handleError({}, 'Could not install.'))
        }
      })
      .catch(error => {
        dispatch(handleError(error, 'Could not install.'))
      })
  }
}

export const installJS = () => {
  return (dispatch) => {
    get(BACKEND_URL + '/setupjs' + window.location.search)
      .then(json => {
        dispatch(installDone())
      })
      .catch(error => {
        dispatch(handleError(error, 'Could not get status.'))
      })
  }
}
