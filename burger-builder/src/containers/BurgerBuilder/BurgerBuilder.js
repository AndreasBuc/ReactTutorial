import React from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'

const INGRDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
}

class BurgerBuilder extends React.PureComponent {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState(updatedIngredients) {
    const ingredients = {
      ...updatedIngredients
    };
    const sum = Object.keys(ingredients).map(
        igKey => {
          return ingredients[igKey]
        }
    ).reduce((acc, cur) => acc + cur,0)
    this.setState({purchaseable: sum > 0 ? true : false})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGRDIENT_PRICES[type]

    this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    let updatedCount = 0;
    if (oldCount>0) {
      updatedCount = oldCount-1;
    } else {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    let newPrice = 0;
    if (oldCount>0) {
      newPrice = oldPrice - INGRDIENT_PRICES[type];
    } else {
      newPrice = oldPrice;
    }
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinuelHandler = () => {
    alert('You continue');
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
          >
          <OrderSummery
              ingredients={this.state.ingredients}
              cancel={this.purchaseCancelHandler}
              continue={this.purchaseContinuelHandler}
              totalPrice={this.state.totalPrice}
            ></OrderSummery>
        </Modal>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled = {disableInfo}
          price = {this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        ></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;
