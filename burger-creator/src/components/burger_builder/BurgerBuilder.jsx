import React, { Component } from 'react';
import Auxiliary from '../../layout_components/auxiliary/Auxiliary';
import BurgerDisplay from '../burger_display/BurgerDisplay';

class BurgerBuilder extends Component{

    render () {
        return (
            <Auxiliary>
                <div>
                    <BurgerDisplay />
                </div>
                <div>Burger control</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;