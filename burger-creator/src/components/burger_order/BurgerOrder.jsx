import React from 'react';
import './BurgerOrder.css';
import BurgerControlPanel from '../controlPanel/BurgerControlPanel';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

function BurgerOrder(props){
    return(
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map( (controlObject) => (
                    <BurgerControlPanel 
                        key={controlObject.label} 
                        label={controlObject.label}
                        increased={() => props.ingredientIncreased(controlObject.type)}
                        decreased={() => props.ingredientDecreased(controlObject.type)}
                        disabled={props.disabled[controlObject.type]}
                         />
                ))
            }
            <button className="OrderButton"
            onClick={props.ordered}>Checkout</button>
        </div>
    );
}

export default BurgerOrder;