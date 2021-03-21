/**
 * Reducer for pokemon data
 */

import { ACTION } from './action'

/**
 * initial state reducer pokemon
 */
export const initialState = {
    isLoading : false,
    pokemonList : {
        isError : false,
        errorText : '',
        data : [],
    },
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.FETCH_POKEMON_LIST:
            state = {
                ...state,
                isLoading : true
            }
            break;
        case ACTION.FETCH_POKEMON_LIST_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                pokemonList : {
                    isError: false,
                    data : action.pokemonList
                }
            }
            break;
        case ACTION.FETCH_POKEMON_LIST_FAILED:
            state = {
                ...state,
                isLoading: false,       
                pokemonList : {
                    isError: true,
                    data : [],
                    errorText: action.error
                }
            }
            break
        default:
            break;
    }

    return state
}

export default pokemonReducer