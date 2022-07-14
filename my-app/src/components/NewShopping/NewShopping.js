import ShoppingForm from "./ShoppingForm";
import "./NewShopping.css";

const NewShopping = (props) => {
//we give a child (ShoopingForm a props which is a function that is called inside the child component and gets the data from it)
const saveShoppingDataHandler = (saveEnteredData) => {
  const shoppingData ={
...saveEnteredData,
id: Math.random().toString()
  }
props.onAddShopping(shoppingData);
}

  return (
    <div className="new-shopping">
      <ShoppingForm onDataSave={saveShoppingDataHandler}/>
    </div>
  );
};
export default NewShopping;
