/**
 * global saga for all page
 */
import { all } from 'redux-saga/effects'
import pokemonSaga from './pokemonReducer/saga'

/**
 * combine all saga
 */
export default function* saga() {
    yield all([
        pokemonSaga()  
    ])
}

