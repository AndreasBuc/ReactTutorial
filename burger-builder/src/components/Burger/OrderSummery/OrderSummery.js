import React from 'react';
import Aux from '../../../hoc/auxiliary'
import Button from '../../UI/Button/Button'

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
      <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType={'Danger'} clicked={props.cancel}>Cancel</Button>
      <Button btnType={'Success'} clicked={props.continue}>Continue</Button>
    </Aux>
  );
};

export default orderSummery;
