import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGR_PRICES = {
    salad: 10,
    bacon:15,
    cheese:20,
    meat:10
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 20,
        purchaseble:false,
        purchasing:false
    }
updatePurchaseState (ingredients) {
    
    const sum = Object.keys(ingredients).map(igKey => {
        return ingredients[igKey];
    }).reduce((sum,el) => {
        return sum + el;
    },0);

    this.setState({purchaseble: sum > 0});
}

    addIngredientHandler = (type) => {
         const oldCount = this.state.ingredients[type];
         const updatedCounted = oldCount + 1;
         const updatedIngredients={
             ...this.state.ingredients
         };
         updatedIngredients[type] = updatedCounted;
         const priceAddition = INGR_PRICES[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice + priceAddition;
         this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
         this.updatePurchaseState(updatedIngredients);


    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGR_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({purchasing : true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
    }
    purchaseContinueHandler = () => {
    alert('You Continue!');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>

            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary ingredients={this.state.ingredients} 
                    purchaseCancel={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    price={this.state.totalPrice}

                />
            </Modal>

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchaseble ={this.state.purchaseble}
                    ordered ={this.purchaseHandler}
                    price={this.state.totalPrice}
                />            
            </Aux>
        );
    }
}

export default BurgerBuilder;