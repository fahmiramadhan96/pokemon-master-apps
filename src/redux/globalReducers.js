/**
 * import reducer for page
 */
import { combineReducers } from 'redux'

import pokemonReducer from './pokemonReducer/reducer'

/**
 * combine all reducer
 */
 const createRootReducer = combineReducers({
    pokemonReducer
})

export default createRootReducer
