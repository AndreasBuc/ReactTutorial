import React from 'react';
import Aux from '../../../hoc/auxiliary'

const orderSummery = (props) => {

  let ingredientsSummery = [];
  for (let attr in props.ingredients) {
    ingredientsSummery.push(
      <li key={attr}>
        <span style={{textTransform: 'capitalize'}}>
          {attr}
        </span>: {props.ingredients[attr]}
      </li>
  )
  }

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious Burger with the following Ingredients:</p>
      <ul>{ingredientsSummery}</ul>
    <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummery;
