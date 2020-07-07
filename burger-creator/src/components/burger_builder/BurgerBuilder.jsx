import React, { Component } from 'react';
import Auxiliary from '../../layout_components/auxiliary/Auxiliary';
import BurgerDisplay from '../burger_display/BurgerDisplay';
import BurgerControlPanel from '../burger_order/BurgerOrder';
import OrderModal from '../modal/order_modal/OrderModal';
import OrderSummary from '../OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }

    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    addIngredientHandler = (type) =>{
        //Get the previus number of the ingredient
        let oldCount = this.state.ingredients[type]; 
        //number + 1
        let updatedCount = oldCount + 1;
        //copy state object
        let updatedIngredients = {
            ...this.state.ingredients
        };
        //update array
        updatedIngredients[type] = updatedCount;
        //get the price of the ingredient
        let priceAddition = INGREDIENT_PRICES[type];
        //get the previous price
        let oldPrice = this.state.totalPrice;
        //update price
        let newPrice = oldPrice + priceAddition;
        //update state
        this.setState( { ingredients: updatedIngredients, totalPrice: newPrice } );
    }

    removeIngredientHandler = ( type ) => {
        //Get the previus number of the ingredient
        let oldCount = this.state.ingredients[type];
        //if number = 0 , no action
        if ( oldCount <= 0 ) {
            return;
        }
        //number -1
        let updatedCount = oldCount - 1;
        //copy state object
        let updatedIngredients = {
            ...this.state.ingredients
        };
        //update array
        updatedIngredients[type] = updatedCount;
        //get the price of the ingredient
        let priceDeduction = INGREDIENT_PRICES[type];
        //get the previous price
        let oldPrice = this.state.totalPrice;
        //update price
        let newPrice = oldPrice - priceDeduction;
        //update state
        this.setState( { ingredients: updatedIngredients, totalPrice: newPrice } );
    }

    render () {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        console.log(disabledInfo);
 
        return (
            <Auxiliary>
                <OrderModal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} />
                </OrderModal>
                <div>
                    <BurgerDisplay ingredients = {this.state.ingredients}/>
                </div>
                <div>
                    <BurgerControlPanel 
                        
                        ingredientIncreased={this.addIngredientHandler}
                        ingredientDecreased={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                         />
                </div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;