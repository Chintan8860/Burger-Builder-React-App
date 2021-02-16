import React , { Component } from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
 render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map( igKey => {
        return (
            <li key={igKey}>
                <span style={{ testTransform: 'capitalize'}}>
                    {igKey} : {this.props.ingredients[igKey]}
                </span>
            </li>
        );
    });

     return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2) + "₹"}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType={"Danger"} clicked={this.props.purchaseCancel}>Cancel</Button>
            <Button btnType={"Success"} clicked={this.props.purchaseContinue}>Continue</Button>
        </Aux>
     );
 }
}


export default OrderSummary;