import React, {useState} from 'react';
import ShoppingItem from "./ShoppingItem";
import ShoppingFilter from './ShoppingFilter';
import "./Shoppings.css";

const Shoppings = (props) => {

const [filteredCategory, setFilteredCategory] = useState('groceries');
const savedCategoryHandler = (savedCategory) => {
setFilteredCategory(savedCategory);
}


  return (
    <div className="shoppings-container" >
      <ShoppingFilter selected={filteredCategory} onSavedCategory={savedCategoryHandler}/>
      <ShoppingItem 
       title={props.items[0].title}
       amount={props.items[0].amount}
       category= {props.items[0].category}
      />
      <ShoppingItem 
      title={props.items[1].title}
      amount={props.items[1].amount}
      category= {props.items[1].category}/>
      <ShoppingItem 
       title={props.items[2].title}
       amount={props.items[2].amount}
       category= {props.items[2].category}/>
      <ShoppingItem 
       title={props.items[3].title}
       amount={props.items[3].amount}
       category= {props.items[3].category}/>
    </div>
  );
};

export default Shoppings;