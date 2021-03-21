/**
 * Saga for pokemon reducer
 */
import {
    call, put, takeLatest,
} from 'redux-saga/effects'

import request from 'utils/request'
import { 
    ACTION,
    fetchPokemonListSuccess,
    fetchPokemonListFailed } from './action'
import * as CONSTANT from 'utils/constant'

/** Request pokemon list  */
export function* fetchPokemonList() {
    try {
        const requestURL = `${CONSTANT.BASE_URL}/pokemon?limit=20&offset=20`;
        const options = {
          method: 'GET',
          'Access-Control-Allow-Origin': '*'
        };
        const response = yield call(request, requestURL, options);
        yield put(fetchPokemonListSuccess(response))
    }
    catch (err) {
        yield fetchPokemonListFailed(CONSTANT.FAILED_FETCH_LIST)
    }
  }

export default function* pokemonSaga() {
    yield takeLatest(ACTION.FETCH_POKEMON_LIST, fetchPokemonList)
}