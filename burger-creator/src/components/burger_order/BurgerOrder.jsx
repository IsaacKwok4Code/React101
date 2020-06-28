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
            {controls.map( (controlObject) => (
                    <BurgerControlPanel 
                        key={controlObject.label} 
                        label={controlObject.label}
                        increased={() => props.ingredientIncreased(controlObject.type)}
                        decreased={() => props.ingredientDecreased(controlObject.type)}
                         />
                ))
            }
        </div>
    );
}

export default BurgerOrder;