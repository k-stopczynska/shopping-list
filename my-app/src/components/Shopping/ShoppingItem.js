import "./ShoppingItem.css";


const ShoppingItem = (props) => {
    return (
        <div className="shopping-item">
          <div className="shopping-item__category">{props.category}</div>
          <h2>{props.title}</h2>
          <div className="shopping-item__amount">{props.amount}</div>
        </div>
    )
}

export default ShoppingItem;