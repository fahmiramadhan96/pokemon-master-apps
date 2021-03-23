/**
 * Action for pokemon reducer
 */
export const ACTION = {
    FETCH_POKEMON_LIST : 'FETCH_POKEMON_LIST',
    SEARCH_POKEMON : 'SEARCH_POKEMON',
    FETCH_POKEMON_LIST_SUCCESS : 'FETCH_POKEMON_LIST_SUCCESS',
    FETCH_POKEMON_LIST_FAILED : 'FETCH_POKEMON_LIST_FAILED',
    FETCH_POKEMON_DETAIL : 'FETCH_POKEMON_DETAIL',
    SET_POKEMON_DETAIL : 'SET_POKEMON_DETAIL'
}

export const fetchPokemonList = (params) => ({
    type: ACTION.FETCH_POKEMON_LIST,
    params
})

export const fetchPokemonListSuccess = (pokemonList) => ({
    type: ACTION.FETCH_POKEMON_LIST_SUCCESS,
    pokemonList
})

export const fetchPokemonListFailed = (error) => ({
    type: ACTION.FETCH_POKEMON_LIST_FAILED,
    error
})

export const searchPokemon = (params) => ({
    type: ACTION.SEARCH_POKEMON,
    params
})

export const fetchPokemonDetail = (params) => ({
    type: ACTION.FETCH_POKEMON_DETAIL,
    params
})

export const setPokemonDetail = (pokemonDetail) => ({
    type: ACTION.SET_POKEMON_DETAIL,
    pokemonDetail
})