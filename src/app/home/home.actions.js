import constants from './home.constants'

export default {
  loadApp,
  addDot,
  loadAppRequest
}

export function loadApp () {
  return dispatch => {
    dispatch(loadAppRequest())

    const interval = setInterval(() => {
      dispatch(addDot())
    }, 1000)

    setTimeout(() => {
      clearInterval(interval)
      dispatch(loadAppSuccess())
    }, 4500)
  }
}

export function loadAppRequest () {
  return {
    type: constants.LOAD_APP
  }
}

export function loadAppSuccess (result) {
  return {
    type: constants.LOAD_APP_SUCCESS,
    result
  }
}

export function addDot () {
  return {
    type: constants.ADD_DOT
  }
}
