/**
 * Saga for pokemon reducer
 */
import {
    call, put, takeLatest, all
} from 'redux-saga/effects'

import request from 'utils/request'
import { 
    ACTION,
    fetchPokemonListSuccess,
    fetchPokemonListFailed } from './action'
import listData from 'utils/constructData/listData'
import * as CONSTANT from 'utils/constant'

/** Request pokemon list  */
export function* fetchPokemonList(parameter) {
    const {params} = parameter 
    let requestURL = `${CONSTANT.BASE_URL}/pokemon?limit=${20}&offset=${0}`;
    if(params) {
        requestURL = params
    }

    try {
        const options = {
          method: 'GET',
          'Access-Control-Allow-Origin': '*'
        };
        let response = yield call(request, requestURL, options);
        let results = response.results
        results = yield all(results.map(value => call(request, value.url, options)))
        response = {
            data : listData(results),
            page: {
                nextPage : response.next,
                prevPage : response.previous
            }
        }
        yield put(fetchPokemonListSuccess(response))
    }
    catch (err) {
        yield fetchPokemonListFailed(CONSTANT.FAILED_FETCH_LIST)
    }
  }

export default function* pokemonSaga() {
    yield takeLatest(ACTION.FETCH_POKEMON_LIST, fetchPokemonList)
}