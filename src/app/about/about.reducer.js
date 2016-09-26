import constants from './about.constants'

const initialState = {
  meaningOfLifeAndAllTheUniverse: null
}

export default function aboutReducer (state = initialState, action) {
  switch (action.type) {
    case constants.HANDLE_ABOUT_CLICK:
      return Object.assign({}, state, {
        meaningOfLifeAndAllTheUniverse: 42
      })

    default:
      return state
  }
}
