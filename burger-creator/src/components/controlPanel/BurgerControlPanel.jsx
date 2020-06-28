import React from 'react';
import './BurgerControlPanel.css';

function BurgerControlPanel(props){
    return(
        <div className="ControlPanel">
             <button className="Less"
                onClick={props.decreased}
                disabled={props.disabled}>Less</button>
            <div className={props.Label}>{props.label}</div> 
            <button className="More"
                onClick={props.increased}
                >More</button>
        </div>
    );
}

export default BurgerControlPanel;