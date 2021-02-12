import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngridieant/BurgerIngridieant';

const burger = (props) => {
    let transFormedIngredinats = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map(( _ ,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        },[]);

        if(transFormedIngredinats.length === 0){
            transFormedIngredinats = <p>Please start adding ingredients</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transFormedIngredinats}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;