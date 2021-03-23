/**
 * selector for pokemon reducer
 */
import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobal = (state) => state.pokemonReducer || initialState

const getLoading = () => createSelector(
    selectGlobal,
    (state) => state.isLoading
)
const getPokemonList = () => createSelector(
    selectGlobal,
    (state) => state.pokemonList
)
const getPokemonDetail = () => createSelector(
    selectGlobal,
    (state) => state.pokemonDetail
)

export {
    selectGlobal,
    getLoading,
    getPokemonList,
    getPokemonDetail,
}