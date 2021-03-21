/**
 * Global Button
 */
 import React from 'react'
 import PropTypes from 'prop-types'
 
 import './button.css'
 
 const Button = (props) => {
     const { children,
         size = 'medium', 
         type = 'default',
         style = {},
         isRounded = false
     } = props
     
     return(
         <button 
            className={`btn ${size} ${type} ${isRounded ? 'rounded' : ''}`}
            style={style}>
             {children}
         </button>
     )
 }
 
 Button.prototypes = {
     children: PropTypes.node,
     isRounded: PropTypes.bool,
     style: PropTypes.object,
     size: PropTypes.oneOf(['small', 'medium', 'large']),
     type: PropTypes.oneOf(['success', 'info', 'warning', 'danger', 'gray', 'default']),
 }
 
 export default Button
 
 