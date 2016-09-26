import constants from './home.constants'

const initialState = {
  diaverum: '',
  dot: '',
  appIsLoading: true
}

export default function homeReducer (state = initialState, action) {
  switch (action.type) {
    case constants.LOAD_APP:
      return Object.assign({}, state, {
        appIsLoading: true
      })

    case constants.LOAD_APP_SUCCESS:
      return Object.assign({}, state, {
        diaverum: 'Diaverum',
        appIsLoading: false
      })

    case constants.ADD_DOT:
      return Object.assign({}, state, {
        dot: `${state.dot}.`
      })

    default:
      return state
  }
}
