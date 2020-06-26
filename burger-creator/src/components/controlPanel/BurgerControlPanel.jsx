import React from 'react';
import './BurgerControlPanel.css';

function BurgerControlPanel(props){
    return(
        <div className="ControlPanel">
            <button className="Less"
                onClick={props.removed}
                disabled={props.disabled}>Less</button>
            <button className="More"
                onClick={props.increased}
                >More</button>
        </div>
    );
}

export default BurgerControlPanel;