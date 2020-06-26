import React, { Component } from 'react';
import Auxiliary from '../../layout_components/auxiliary/Auxiliary';
import BurgerDisplay from '../burger_display/BurgerDisplay';

class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 2,
                cheese: 1,
                meat: 1
            }
        }
    }

    render () {
        return (
            <Auxiliary>
                <div>
                    <BurgerDisplay ingredients = {this.state.ingredients}/>
                </div>
                <div>Burger control</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;