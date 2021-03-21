import React from 'react'

import MainViews from 'component/views/MainViews'
import BoxViews from 'component/views/BoxViews'
import Text from 'component/atom/Text'
import Button from 'component/atom/Button'

import * as CONTANTS from 'utils/constant'
import './homepage.css'

/** Homepage Page */
const Homepage = () => {
    return(
        <MainViews>
            <BoxViews 
                style={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <Text 
                    size='large'
                    weight='bold' 
                    color='normal'>
                    { CONTANTS.HOMEPAGE_TITLE }
                </Text>
                <div className='container-button'>
                    <Button 
                        isRounded = {true}
                        size='medium' 
                        type='info'>
                    { CONTANTS.HOMEPAGE_BUTTON_BROWSER }
                    </Button>
                    <Button 
                        isRounded = {true}
                        size='medium' 
                        type='info'>
                    { CONTANTS.HOMEPAGE_BUTTON_COMPARE }
                    </Button>
                    <Button 
                        isRounded = {true}
                        size='medium' 
                        type='info'>
                    { CONTANTS.HOMEPAGE_BUTTON_PREDICTION }
                    </Button>
                </div>
            </BoxViews>
        </MainViews>
    )
}

export default Homepage