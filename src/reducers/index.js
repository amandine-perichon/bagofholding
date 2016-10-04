import {combineReducers} from 'redux'

import characters from './characters'
import currentCharacter from './currentCharacter'

export default combineReducers({
  characters,
  currentCharacter
})
