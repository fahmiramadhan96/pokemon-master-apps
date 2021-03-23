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
        page:{},
        isError : false,
        errorText : '',
        data : [],
        pokemonDetail: {}
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
                    page: {...action.pokemonList.page},
                    data : action.pokemonList.data
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
        case ACTION.FETCH_POKEMON_DETAIL:
            state = {
                ...state,
                isLoading: true,       
            }
            break
        case ACTION.SET_POKEMON_DETAIL:
            state = {
                ...state,
                isLoading: false,   
                pokemonDetail: action.pokemonDetail    
               }
            break
        default:
            break;
    }

    return state
}

export default pokemonReducer