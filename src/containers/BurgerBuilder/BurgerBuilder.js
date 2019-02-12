import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 2,
                cheese: 2,
                meat: 1
            }
        }
    }


    render() {
        return (
            <Auxx>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Auxx>
        );
    }
}

export default BurgerBuilder;