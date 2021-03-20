import React from 'react'
import PropTypes from 'prop-types'
import Text from '../../atom/Text'


import './mainViews.css'

const MainViews = (props) => {
    const {title, children} = props

    return ( 
        <div className='container'>
            <Text
                text = 'Test'
                color = 'primary'
                weight = 'bold'
                size = 'medium'
             />
        </div>
)}

MainViews.prototypes = {
    title : PropTypes.string,
    children: PropTypes.node,
}

export default MainViews