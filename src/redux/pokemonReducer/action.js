/**
 * Action for pokemon reducer
 */
export const ACTION = {
    FETCH_POKEMON_LIST : 'FETCH_POKEMON_LIST',
    FETCH_POKEMON_LIST_SUCCESS : 'FETCH_POKEMON_LIST_SUCCESS',
    FETCH_POKEMON_LIST_FAILED : 'FETCH_POKEMON_LIST_FAILED'
}

export const fetchPokemonList = () => ({
    type: ACTION.FETCH_POKEMON_LIST
})

export const fetchPokemonListSuccess = (pokemonList) => ({
    type: ACTION.FETCH_POKEMON_LIST_SUCCESS,
    pokemonList
})

export const fetchPokemonListFailed = (error) => ({
    type: ACTION.FETCH_POKEMON_LIST_FAILED,
    error
})