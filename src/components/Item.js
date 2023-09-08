import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [isOnCart,setIsOnCart] = useState(false);
function handleAdd() {
  setIsOnCart(!isOnCart)
}
  return (
    <li className={isOnCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isOnCart?"remove":"add"} onClick={handleAdd}>{isOnCart?'Remove From Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
