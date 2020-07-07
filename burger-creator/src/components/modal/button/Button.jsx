import React from 'react';
import './Button.css';

const ButtonComponent = (props) => (
    <button 
        className={props.btnType}
        onClick={props.clicked}>{props.children}
    </button>
);

export default ButtonComponent;