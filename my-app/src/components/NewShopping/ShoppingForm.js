import React, {useState} from 'react';
import "./ShoppingForm.css";

//the child component expects props from a parent which is a function (saveShoppingData Handler and we call it when we gather all the data before resetting the values)
const ShoppingForm = (props) => {

    //useState keeps track of state and gives us an variable to store it and a function to update the state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');

const titleChangeHandler = (e) => {
setEnteredTitle(e.target.value);
}

const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
}

const categoryChangeHandler = (e) => {
    setEnteredCategory(e.target.value);
}

//stored in use state variables we assign to an object that we can pass to a input value
//we use two way binding to store the values in an object and change them after the form is submitted
const submitHandler = (e) => {
e.preventDefault();

 const shoppingData = {
    title: enteredTitle,
    amount: enteredAmount,
    category: enteredCategory
} 
//then we can reload the page and assign empty strings as a new value to clear the inputs (just as we did in the beggining calling useState('')=> it always gives us a string)
//but before we have to call the props from a prent element and feed it with our newly created object- shoppingData
props.onDataSave(shoppingData);
setEnteredTitle("");
setEnteredAmount("");
setEnteredCategory("");
}



    return (
        <form className="NewShopping-container" onSubmit={submitHandler}>
            <div className="NewShopping__controls">
            <div className="NewShopping__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="NewShopping__control">
                <label>Category</label>
                <input type="text" value={enteredCategory} onChange={categoryChangeHandler}/>
            </div>
            <div className="NewShopping__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="1" step="1" onChange={amountChangeHandler}/>
            </div>
            </div>
            <div className="NewShopping__actions">
                <button type="submit">Add new item to your list</button>
            </div>

        </form>
    )
}
export default ShoppingForm;