const ShoppingFilter = (props) => {

    const dropdownChangeHandler = (e) => {
        props.onSavedCategory(e.target.value);
    }
    return (
    <div className='shopping-filter'>
    <div className='shopping-filter__control'>
      <label>Filter by category</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value='groceries'>groceries</option>
        <option value='gadgets'>gadgets</option>
        <option value='dogs accesorries'>dogs accesorries</option>
        <option value='cosmetics'>cosmetics</option>
      </select>
    </div>
  </div>
);
}

export default ShoppingFilter;