import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngridieant/BurgerIngridieant';

const burger = (props) => {
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="Cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;