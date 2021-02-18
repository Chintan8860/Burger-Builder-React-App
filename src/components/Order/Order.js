import React from 'react';

import classes from './Order.css';

const order = ( props ) => {
    const ingredients = [];

    for ( let ingredientName in props.ingredients ) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <><span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '15px 0px',
                border: '1px solid #ccc',
                padding: '5px',

                }}
            key={ig.name}>{ig.name} ({ig.amount})</span></>;
    });

    return (
        <div className={classes.Order}>
            <p style={{textAlign:'center'}}> <strong>Ingredients : </strong><br/>{ingredientOutput}</p>
            <p style={{textAlign:'center'}}><strong>Price: </strong>{Number.parseFloat( props.price ).toFixed( 2 )} ₹/-</p>
        </div>
    );
};

export default order;