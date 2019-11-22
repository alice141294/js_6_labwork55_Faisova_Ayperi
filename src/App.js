import React, {Component} from 'react';
import AddIngridients from './component/AddIngrigientsToBurger/AddIngridients';
import './App.css';
import BurgerBuilder from "./component/BurgerBuilder/BurgerBuilder";

class App extends Component {
  state = {
    
    ingredients: [
      
      {name: 'Meat', count: 0},
      {name: 'Cheese', count: 0},
      {name: 'Salad', count: 0},
      {name: 'Bacon', count: 0},
      
    ],
    totalPrice: 20
    
  };


  addNewIngridient = (elem) => {
    const ingredients = [...this.state.ingredients];
    let totalPrice = this.state.totalPrice;
    const index = ingredients.findIndex(i => i.name === elem.name)
    ingredients[index].count ++;
    totalPrice += elem.price;
    this.setState({totalPrice, ingredients});
  };

  removeIngredient = (elem) => {
    let ingredients = [...this.state.ingredients];
    let totalPrice = this.state.totalPrice;
    const index = ingredients.findIndex(i => i.name === elem.name);
    ingredients[index].count --;
    totalPrice -= elem.price;
    this.setState({totalPrice, ingredients});
  };

  render(){
    return (
      <div className="App">
        <AddIngridients
          oneIngredient = {this.state.ingredients}
          addNewIngridient = {this.addNewIngridient}
          removeIngredient = {this.removeIngredient}
        />
        <BurgerBuilder
          price = {this.state.totalPrice}
          ingredients = {this.state.ingredients}
        />
      </div>
      )
    }
    
  }
  
  export default App;
  