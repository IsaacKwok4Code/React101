import React from 'react';
import './BurgerDisplay.css';
import BurgerIngredient from '../burger_ingredients/BurgerIngredient';

function BurgerDisplay(props){
    let transformedIngredients  = null;

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default BurgerDisplay;