import React from "react";
import Item from "./Item";
import { useState } from "react";


function ShoppingList({ items }) {
  const [selectCata,setSelectCata] = useState('All')
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"
        value = {selectCata}
        onChange={(e)=>setSelectCata(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter((item)=>{
          return selectCata === "All" || item.category === selectCata;
        }).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
