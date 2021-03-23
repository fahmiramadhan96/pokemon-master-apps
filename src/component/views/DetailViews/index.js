import React from 'react'
import PropTypes from 'prop-types'

import Text from 'component/atom/Text'

import './detailViews.css'
import Modal from 'component/organism/modal'

const DetailViews = (props) => {
    const { detailsData } = props
    return(
        <div 
            id='container-detail'>
            <div className='container-left'>
                <img 
                    src={detailsData.img} 
                    alt='img'/>
                <div className='container-left-main'>
                    <Text size='extralarge' color='normal' weight='bold'>
                        "{detailsData.name}"
                    </Text>
                </div>
            </div>
            <div className='container-right'>
                <table>
                  <tbody>
                    <tr>
                        <th colSpan="2">"POKEMON DETAILS"</th>
                    </tr>
                    <tr>
                        <td>Pokemon No</td>
                        <th>{detailsData.no}</th>
                    </tr>
                    <tr>
                        <td>Pokemon Type</td>
                        <th>{detailsData.type 
                            && detailsData.type.map((val, index) => `  ${val.toUpperCase()} ${index === detailsData.type.length-1 ? '': ',' }`)}
                        
                        </th>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <th>{detailsData.height}"</th>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <th>{detailsData.weight} lbs</th>
                    </tr>
                    <tr>
                        <td colSpan='2'>"{detailsData.desc}"</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

DetailViews.prototypes = {
    detailsData: PropTypes.node,
    style : PropTypes.object,
}

export default DetailViews