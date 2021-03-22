/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// import * as CONTANTS from 'utils/constant'
import './browsepage.css'

import MainViews from 'component/views/MainViews'
import Text from 'component/atom/Text'
import Card from 'component/molecul/card'
import Button from 'component/atom/Button'
import Search from 'component/molecul/search'
import Filter from 'component/molecul/filter'

import { fetchPokemonList } from 'redux/pokemonReducer/action'
import { getLoading, getPokemonList  } from 'redux/pokemonReducer/selector' 

import pokemonType from 'utils/JSON/pokemonType.json'
import { useState } from 'react'



/** Browse Pokemon Page */
const Browse = (props) => {
    const { isLoading, pokemonList } = props
    const clonePokemonType = JSON.stringify(pokemonType)
    const [filterData, setFilterData] = useState(JSON.parse(clonePokemonType))
    /*  fetch pokemon data */
    useEffect(() => {
        props.fetchPokemon()
    },[])

    const onPaginationClick = (params) => {
        (
        props.fetchPokemon(params)
    )}
    const filterClick = (val) => {
        const newFilterData = filterData.map(fVal => {
            if(fVal.name === val) {
                fVal.selected = !fVal.selected

            }
            return fVal
        })
        setFilterData(newFilterData)
    }

    const getPokemonDataByFilter = (pokemonData) => {
        let filter = filterData.filter(f => f.selected === true );
        const pokeomonReturn = pokemonData.map(val => {
            let fI = false
            for (let index = 0; index < val.type.length; index++) {
                if (filter.length === 0) {
                    fI = true
                } else {
                const fIndex = filter.findIndex(i => i.name === val.type[index])
                    if (fIndex > -1) {
                        fI = true
                        break
                    }
                }
            }
            val.pokemonShow = fI
            return val
        })

        return pokeomonReturn      
    }

    return(
        <MainViews>
            <div className='container-next-page'>
                <Text size='medium' color='normal' weight='bold'>
                    Browse Data
                </Text> 
                <div className='container-pagination'>
                    {pokemonList && pokemonList.page && pokemonList.page.prevPage && 
                    <Button 
                        onClick = {() => onPaginationClick(pokemonList && pokemonList.page && pokemonList.page.prevPage)}
                        style={{marginRight: '2px'}} 
                        isRounded={true} 
                        size='small' 
                        type='info'>
                        PREV
                    </Button>
                    }
                    <Button 
                        onClick = {() => onPaginationClick(pokemonList && pokemonList.page && pokemonList.page.nextPage)}
                        isRounded={true} size='small' 
                        type='info'>
                        NEXT
                    </Button>
                </div>
            </div>
            <div className='container-next-page'>
                <Search 
                    onSearchClick = {(e) => console.log(e)}
                    placehoder='Search Your Pokemon'/>
                <Filter 
                    filterData = {filterData}
                    onFilterClick = {(val) => filterClick(val) } />
            </div>
            <div className='main-browser'>
                {pokemonList 
                    && pokemonList.data 
                    && getPokemonDataByFilter(pokemonList && pokemonList.data) 
                    && pokemonList.data.map(pokemon => ( pokemon.pokemonShow 
                    && <Card 
                        key={pokemon.no}
                        img={pokemon.img}
                        pokemonNo={pokemon.no}
                        pokemonName={pokemon.name}
                        pokemonType={pokemon.type[0]}
                    />)
                )}
            </div>
        </MainViews>
    )
}

const mapStateToProps = createStructuredSelector({
    pokemonList: getPokemonList(),
    isLoading: getLoading(),
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchPokemon: (params) => {
      dispatch(fetchPokemonList(params))
    },
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Browse)