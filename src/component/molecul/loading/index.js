import React from 'react'

import loading from 'assets/image/loading-new.gif'
import './loading.css'

const Loading = (props) => {
    return(
        <div id='loading'>
            <img src={loading} alt='loading' className='main-loading'/>
        </div>
    )
}

export default Loading

