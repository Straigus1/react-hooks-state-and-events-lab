import React, {useState} from "react";

function Item({ name, category }) {

const [itemHere, setItemHere] = useState(true)

function itemClick() {
    setItemHere((itemHere) => !itemHere)
}

  return (
    <li className={itemHere ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={itemClick} className="add">{itemHere ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
