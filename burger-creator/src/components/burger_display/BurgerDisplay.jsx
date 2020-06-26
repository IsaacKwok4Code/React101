import React from 'react';
import './BurgerDisplay.css';
import BurgerIngredient from '../burger_ingredients/BurgerIngredient';

function BurgerDisplay(props){
    let transformedIngredients  = Object.keys(props.ingredients)
        .map(ingredientsKey => {
            return [...Array(props.ingredients[ingredientsKey])].map( (_,i) =>{
                return <BurgerIngredient key={ingredientsKey + i} type={ingredientsKey} />
            })
        });

    console.log(transformedIngredients);

    transformedIngredients = transformedIngredients.reduce((objectArray, ingredinentObject) => {
        return objectArray.concat(ingredinentObject)
    }, []);

    console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>start adding ingredients!</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default BurgerDisplay;