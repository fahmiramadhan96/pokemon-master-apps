import React from 'react'

import * as CONTANTS from 'utils/constant'
import './homepage.css'
import { useHistory } from "react-router-dom";

import MainViews from 'component/views/MainViews'
import BoxViews from 'component/views/BoxViews'
import Text from 'component/atom/Text'
import Button from 'component/atom/Button'



/** Homepage Page */
const Homepage = () => {
    let history = useHistory();

    const route = (page) => (
        history.push(page)
    )

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
                        onClick = {() => route('/browsepage')}
                        isRounded = {true}
                        size='medium' 
                        type='info'>
                    { CONTANTS.HOMEPAGE_BUTTON_BROWSER }
                    </Button>
                    <Button 
                        onClick = {() => route('/comparepage')}
                        isRounded = {true}
                        size='medium' 
                        type='info'>
                    { CONTANTS.HOMEPAGE_BUTTON_COMPARE }
                    </Button>
                    <Button 
                        onClick={() => route('/predictedpage')}
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