/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './predicted.css'

import MainViews from 'component/views/MainViews'
import PredictedViews from 'component/views/PredictedViews'

import { fetchPredictedPokemon } from 'redux/pokemonReducer/action'
import { getPokemonPredicted, getLoading } from 'redux/pokemonReducer/selector'
import PropTypes from 'prop-types'



/** Predicted Page */
const Predictedpage = (props) => {
    const {pokemonPredicted, isLoading} = props
    const [isCloseModal, setCloseModal] = useState(false)
    const [active, setActive] = useState('')
    const [predictedData, setPredictedData] = useState([])
    useEffect(() => {        
        setPredictedData({
            ...predictedData,
            [active]: pokemonPredicted
        })
    },[pokemonPredicted])

    const checkPersentage = (data) => {
        if(data && data.predicted0 && data.predicted1) {
            const doubleDamagePokemon1 = predictedData.predicted0.damageAttack.doubleDamage
            const halfDamagePokemon1 = predictedData.predicted0.damageAttack.halfDamage
            const doubleDamagePokemon2 = predictedData.predicted1.damageAttack.doubleDamage
            const halfDamagePokemon2 = predictedData.predicted1.damageAttack.halfDamage

            let statusPkn1 = '0%'
            for (let index = 0; index < predictedData.predicted1.type.length; index++) {
                const type1 = predictedData.predicted1.type[index];
                if(doubleDamagePokemon1.indexOf(type1) > -1) {
                    statusPkn1 = '100%'
                    break
                }else if(halfDamagePokemon1.indexOf(type1) > -1){
                    statusPkn1 = '50%'
                    break
                }
            }
            let statusPkn2 = '0%'
            for (let index = 0; index < predictedData.predicted0.type.length; index++) {
                const type1 = predictedData.predicted0.type[index];
                if(doubleDamagePokemon2.indexOf(type1) > -1) {
                    statusPkn2 = '100%'
                    break
                }else if(halfDamagePokemon2.indexOf(type1) > -1){
                    statusPkn2 = '50%'
                    break
                }
            }
         data = {
            predicted0 : {
                ...data.predicted0,
                precentage: statusPkn1
            },
            predicted1 : {
                ...data.predicted1,
                precentage: statusPkn2
            }
         }
            return data
        }
        return data
    }

    return(
        <MainViews>
            <PredictedViews      
                isCloseModal = {isCloseModal}
                pokemonData = {checkPersentage(predictedData)}
                onReset = {(key) => {
                    setPredictedData({
                        ...predictedData,
                        [`predicted${key}`]: null
                    })
                }}
                onSearchClick={(key, value) => {
                    setCloseModal(true)
                    setActive(`predicted${key}`)
                    setTimeout(() => {
                        setCloseModal(false)
                    }, 100);
                    props.fetchPredicted(value)}}/> 

        </MainViews>
    )
}


Predictedpage.prototypes = {
    pokemonPredicted: PropTypes.object,
    isLoading: PropTypes.bool,
    fetchPredicted: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
    pokemonPredicted: getPokemonPredicted(),
    isLoading: getLoading(),
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchPredicted: (params) => {
      dispatch(fetchPredictedPokemon(params))
    },
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(Predictedpage)