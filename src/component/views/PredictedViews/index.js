import React from 'react'
import PropTypes from 'prop-types'

import './predictedViews.css'
import Search from 'component/molecul/search'
import Modal from 'component/organism/modal'
import Text from 'component/atom/Text'
import Button from 'component/atom/Button'


const CompareViews = (props) => {
    const { onSearchClick, pokemonData=[], isCloseModal=false, onReset=() => {} } = props
    const addPokemon = (key) => (
        <Modal 
            isClose={isCloseModal}
            modalTitle='Select Pokemon'
            buttonTitle='Select Pokemon'>
            <Search 
                buttonStyle={{height: '27px'}}
                onSearchClick = {(val)=> onSearchClick(key, val)}/> 
        </Modal>
    )
    const firstPoekemon = pokemonData.predicted0
    const secondPoekemon = pokemonData.predicted1
    return(
        <div id='container-predicted'>
            {!firstPoekemon ?  <div className='modal-container'>{addPokemon(0)}</div> :
            <div className='main-predicted main-predicted-left'>
                <img className='main-image' alt='main-img' src={firstPoekemon && firstPoekemon.img}/>
                <Text size='extralarge' weight='bold' color='normal'>"{firstPoekemon && firstPoekemon.name}"</Text>
                <Text size='extralarge' weight='bold' color='normal'>{firstPoekemon && firstPoekemon.precentage}</Text>
                <Button size='large' type='info' onClick = {() => onReset(0)}>RESET</Button>
            </div>
            }
            {!secondPoekemon ? <div className='modal-container'>{addPokemon(1)}</div> :
           <div className='main-predicted main-predicted-right'>
                <img className='main-image' alt='main-img' src={secondPoekemon && secondPoekemon.img}/>
                <Text size='extralarge' weight='bold' color='normal'>"{secondPoekemon && secondPoekemon.name}"</Text>
                <Text size='extralarge' weight='bold' color='normal'>{secondPoekemon && secondPoekemon.precentage}</Text>
                <Button size='large' type='info' onClick = {() => onReset(1)}>RESET</Button>
            </div>
            }
        </div>
    )
}

CompareViews.prototypes = {
    isCloseModal: PropTypes.bool,
    onSearchClick: PropTypes.func,
    pokemonData: PropTypes.array,
    children: PropTypes.node,
    style : PropTypes.object,
    onReset: PropTypes.func,
}

export default CompareViews