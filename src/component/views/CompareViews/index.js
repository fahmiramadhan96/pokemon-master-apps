import React from 'react'
import PropTypes from 'prop-types'

import './compareViews.css'
import Search from 'component/molecul/search'
import Modal from 'component/organism/modal'
import Button from 'component/atom/Button'


const CompareViews = (props) => {
    const { onSearchClick, pokemonData=[], isCloseModal=false, onReset=() => {} } = props
    const addPokemon = (key) => (
        <Modal 
            isClose={isCloseModal}
            modalTitle='Select Pokemon'
            buttonTitle='Select Pokemon'>
            <Search 
                placeholder ='Input Pokemon Id or Name'
                buttonStyle={{height: '27px'}}
                onSearchClick = {(val)=> onSearchClick(key, val)}/> 
        </Modal>
    )
    const listItem = (title, value1, value2) => (
        <tr>
            <th>{value1 ? value1 : '-'}</th>
            <td>{title}</td>
            <th>{value2 ? value2 : '-'}</th>
        </tr>
    )
    const listMultipleItem = (title, value1, value2) => (
        <tr>
            <th>{value1 
                ? value1.map((val, index) => ` ${val.toUpperCase()} ${index === value1.length-1 ? '': ',' }`) : '-'}</th>
            <td>{title}</td>
            <th>{value2 
                ? value2.map((val, index) => ` ${val.toUpperCase()} ${index === value2.length-1 ? '': ',' }`) : '-'}</th>
    </tr>
    )
    const firstPoekemon = pokemonData.compare0
    const secondPoekemon = pokemonData.compare1
    return(
        <div id='container-compareviews'>
            <table>
                <tbody>
                    <tr>
                        <td colSpan='3'>
                            <div className='header-compareviews'>
                                <div>
                                    {firstPoekemon ? 
                                        <img className='comapare-image' src={firstPoekemon.img} alt='compare'/> 
                                        :  addPokemon(0)}
                                </div>
                                <div>                       
                                    {secondPoekemon ? 
                                        <img className='comapare-image' src={secondPoekemon.img} alt='compare'/> 
                                        :  addPokemon(1)}
                                </div> 
                            </div>
                        </td>
                    </tr>
                    {listItem('Pokemon No',firstPoekemon && firstPoekemon.no, secondPoekemon && secondPoekemon.no)}
                    {listMultipleItem('Pokemon Type',firstPoekemon && firstPoekemon.type, secondPoekemon && secondPoekemon.type)}
                    {listItem('Height',firstPoekemon && firstPoekemon.height, secondPoekemon && secondPoekemon.height)}
                    {listItem('Weight',firstPoekemon && firstPoekemon.weight, secondPoekemon && secondPoekemon.weight)}
                    {listItem('Description',firstPoekemon && firstPoekemon.desc, secondPoekemon && secondPoekemon.desc)}
                    <tr>
                        <th><Button size='medium' type='info' onClick={() => {onReset(0)}}>Reset</Button></th>
                        <td>Reset</td>
                        <th><Button size='medium' type='info' onClick={() => {onReset(1)}}>Reset</Button></th>
                    </tr>
                </tbody>
            </table>
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