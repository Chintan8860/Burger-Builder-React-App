import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ testTransform: 'capitalize'}}>
                        {igKey} : {props.ingredients[igKey]}
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
            <p><strong>Total Price: {props.price.toFixed(2) + "₹"}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType={"Danger"} clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType={"Success"} clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;