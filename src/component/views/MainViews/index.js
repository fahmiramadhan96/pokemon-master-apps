import React from 'react'
import PropTypes from 'prop-types'

import './mainViews.css'
import logo from 'assets/image/logo.png'

const MainViews = (props) => {
    const { children, style } = props

    return ( 
        <div className='container' style={style}>
            <img className='img-logo' src={logo} alt='logo'/>
            {children}
        </div>
)}

MainViews.prototypes = {
    style : PropTypes.object,
    children: PropTypes.node,
}

export default MainViews