import React, { Component } from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';

/*  
* this component is creating burger object
* param - string (burger ingradient)
* return div with styled - using className 
*/ 

class BurgerIngredient extends Component{
    constructor(props){
        super(props);
    }

    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className="BreadBottom"></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className="Meat"></div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className="Cheese"></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className="Bacon"></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className="Salad"></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;