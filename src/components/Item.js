import React from "react";

const Item = ({ item }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.phone}</span>
    </li>
  );
};

export default Item;
