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
    fetchPokemonListFailed,
    setPokemonDetail,
    setPredictedPokemon } from './action'
import listData from 'utils/constructData/listData'
import detailsData from 'utils/constructData/detailsData'
import predictedData from 'utils/constructData/predictedData'
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

export function* searchPokemon(parameter){
    const {params} = parameter 
    let requestURL = `${CONSTANT.BASE_URL}/pokemon/${params}`;
    try {
        const options = {
          method: 'GET',
          'Access-Control-Allow-Origin': '*'
        };
        let response = yield call(request, requestURL, options);
        response = {
            data : listData(response),
        }
        yield put(fetchPokemonListSuccess(response))
    }
    catch (err) {
        yield fetchPokemonListFailed(CONSTANT.FAILED_FETCH_LIST)
    }
}

export function* getPokemonDetail(parameter){
    const {params} = parameter 
    const pokemonDetail = `${CONSTANT.BASE_URL}/pokemon/${params}`;
    const pokemonSpecies = `${CONSTANT.BASE_URL}/pokemon-species/${params}`
    try {
        const options = {
          method: 'GET',
          'Access-Control-Allow-Origin': '*'
        };
        let pokemonData = yield call(request, pokemonDetail, options);
        let speciesUrl = pokemonData && pokemonData.species && pokemonData.species.url
        let species = undefined
        if (speciesUrl) {
            species = yield call(request, pokemonSpecies, options);
        } 
        const response = detailsData(pokemonData, species)
        yield put(setPokemonDetail(response))
    }
    catch (err) {
        yield fetchPokemonListFailed(CONSTANT.FAILED_FETCH_LIST)
    }
}


export function* getPredictedPokemon(parameter){
    const {params} = parameter 
    const pokemonDetail = `${CONSTANT.BASE_URL}/pokemon/${params}`;
    const pokemonTypes = `${CONSTANT.BASE_URL}/type/${params}`
    try {
        const options = {
          method: 'GET',
          'Access-Control-Allow-Origin': '*'
        };
        let pokemonData = yield call(request, pokemonDetail, options);
        const pokemonType = yield call(request, pokemonTypes, options)
        const response = predictedData(pokemonData, pokemonType)
        yield put(setPredictedPokemon(response))
    }
    catch (err) {
        yield fetchPokemonListFailed(CONSTANT.FAILED_FETCH_LIST)
    }
}

export default function* pokemonSaga() {
    yield takeLatest(ACTION.FETCH_POKEMON_LIST, fetchPokemonList)
    yield takeLatest(ACTION.SEARCH_POKEMON, searchPokemon)
    yield takeLatest(ACTION.FETCH_POKEMON_DETAIL, getPokemonDetail)
    yield takeLatest(ACTION.FETCH_POKEMON_PREDICTED, getPredictedPokemon)
}