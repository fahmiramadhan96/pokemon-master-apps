import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PropTypes from 'prop-types'
import './modal.css'
import Button from 'component/atom/Button'

const Modal = (props) =>{ 
    const {children, modalTitle, buttonTitle, isClose} = props

    return (
    <Popup
        trigger={<Button size='large' type='info'> {buttonTitle} </Button>}
        modal
        nested
        >
        {close => (
        <div className="modal">
            {isClose && close()}
            <button className="close" onClick={close}>
            &times;
            </button>
            <div className="header"> {modalTitle} </div>
            <div className="content">
                {children}
            </div>
        </div>
        )}
    </Popup>)
};

Modal.prototypes = {
    isClose: PropTypes.bool,
    modalTitle: PropTypes.string,
    buttonTitle: PropTypes.string,
    children: PropTypes.node,
}

export default Modal
