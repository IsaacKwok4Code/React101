import React, { Component } from 'react';

import Auxiliary from '../../layout_components/auxiliary/Auxiliary';
import ButtonComponent from '../modal/button/Button';

function OrderSummary(props){
    const orderedIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li>
                    <span>{igKey}</span>{props.ingredients[igKey]}
                </li>
            )
        });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>following items:</p>
            <ul>
                {orderedIngredient}
            </ul>
            <p><strong>Total Price: {props.price.toFixed( 2 )}</strong></p>
            <ButtonComponent btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</ButtonComponent>
            <ButtonComponent btnType="Success" clicked={props.purchaseContinued}>CONTINUE</ButtonComponent>
        </Auxiliary>
    )
}

export default OrderSummary;