import { combineReducers } from 'redux'
import homeReducer from './home/home.reducer'
import aboutReducer from './about/about.reducer'

export default combineReducers({
  home: homeReducer,
  about: aboutReducer
})
