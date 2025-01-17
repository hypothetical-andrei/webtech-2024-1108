import { combineReducers } from 'redux'
import counter from './counter-reducer'
import university from './university-reducer'

export default combineReducers({
  counter,
  university
})