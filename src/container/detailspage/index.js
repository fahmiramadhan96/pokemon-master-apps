/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import './details.css'

import { fetchPokemonDetail } from 'redux/pokemonReducer/action'
import { getPokemonDetail, getLoading } from 'redux/pokemonReducer/selector'

import MainViews from 'component/views/MainViews'
import DetailViews from 'component/views/DetailViews'



/** Details Page */
const Detailspage = (props) => {
    const { match, pokemonDetail, isLoading } = props
    useEffect(() => {
        const params = match.params && match.params.name
        props.fetchPokemon(params)
    },[])
    return(
        <MainViews>
          {pokemonDetail && 
            <DetailViews detailsData = {pokemonDetail}/> }
        </MainViews>
    )
}

Detailspage.prototypes = {
    pokemonDetail: PropTypes.object,
    isLoading: PropTypes.bool,
    fetchPokemon: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
    pokemonDetail: getPokemonDetail(),
    isLoading: getLoading(),
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchPokemon: (params) => {
      dispatch(fetchPokemonDetail(params))
    },
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(Detailspage)
