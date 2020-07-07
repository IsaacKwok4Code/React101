import React, { Component } from 'react';
import './OrderModal.css';
import Auxiliary from '../../../layout_components/auxiliary/Auxiliary';
import Backdrop from '../backdrop/BackDrop';

function OrderModal(props){

    return (
        <Auxiliary>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Auxiliary>
    )
}

export default OrderModal;