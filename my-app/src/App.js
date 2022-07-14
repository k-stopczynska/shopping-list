import Shoppings from "./components/Shopping/Shoppings";
import NewShopping from "./components/NewShopping/NewShopping";

const shoppings = [
  {
    id : "1",
    title: "Bananas",
    amount: 6,
    category: 'groceries'
  },
  {
    id : "2",
    title: "Shampoo",
    amount: 2,
    category: 'cosmetics'
  },
  {
    id : "3",
    title: "Pendrive",
    amount: 1,
    category: 'RTV'
  },
  {
    id : "4",
    title: "Leash",
    amount: 4,
    category: 'dogs\'s accesorries'
  }
]

function App() {

const addShoppingHandler = (shopping) => {
  console.log(shopping);
}

  return (
    <div className="App">
     <NewShopping onAddShopping={addShoppingHandler}/>
     <Shoppings items={shoppings}/>
    
    </div>
  );
}

export default App;
