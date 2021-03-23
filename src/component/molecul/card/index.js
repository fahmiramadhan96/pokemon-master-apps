import React from 'react'
import PropTypes from 'prop-types'

import './card.css'

import Text from 'component/atom/Text'


const Card = (props) => {
    const {img='',
        pokemonNo = 0, 
        pokemonType='', 
        pokemonName='', 
        onClick = () => {},
    } = props
    

    return(
        <div id='container-card' className={`type-${pokemonType}`} onClick={() => onClick()}>
            <Text 
                style={{position: 'absolute'}} 
                size='small' 
                color='normal' 
                weight='bold'>#{pokemonNo}</Text>
            <div className='container-text'>
                <img className='pokemon-img' src={img} alt='imgPokemon'/>
                <Text size='medium' color='normal' weight='bold'>{pokemonName}</Text>
            </div>
        </div>
    )
}

Card.prototypes = {
    onClick: PropTypes.func,
    img: PropTypes.string,
    pokemonType: PropTypes.string,
    pokemonNo: PropTypes.number,
    pokemonName: PropTypes.string,
}

export default Card

