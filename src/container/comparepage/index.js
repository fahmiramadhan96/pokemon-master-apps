/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import './comparepage.css'

import MainViews from 'component/views/MainViews'
import CompareViews from 'component/views/CompareViews'

import { fetchPokemonDetail } from 'redux/pokemonReducer/action'
import { getPokemonDetail, getLoading } from 'redux/pokemonReducer/selector'



/** Compare Page */
const Comparepage = (props) => {
    const {pokemonDetail, isLoading} = props
    const [isCloseModal, setCloseModal] = useState(false)
    const [active, setActive] = useState('')
    const [comapareData, setCompareData] = useState([])
    useEffect(() => {        
        setCompareData({
            ...comapareData,
            [active]: pokemonDetail
        })
    },[pokemonDetail])
    return(
        <MainViews>
            <CompareViews 
                isCloseModal = {isCloseModal}
                pokemonData = {comapareData}
                onReset = {(key) => {
                    setCompareData({
                        ...comapareData,
                        [`compare${key}`]: null
                    })
                }}
                onSearchClick={(key, value) => {
                    setCloseModal(true)
                    setActive(`compare${key}`)
                    setTimeout(() => {
                        setCloseModal(false)
                    }, 100);
                    props.fetchPokemon(value)}}/>
        </MainViews>
    )
}


Comparepage.prototypes = {
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Comparepage)