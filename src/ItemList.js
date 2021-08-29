import React from 'react';
import Item from './item';

const ItemList = ({ items, removeItem }) => {
  return (
    <div className="items-container">
      <ul style={{ display: "flex", justifyContent:"center",flexDirection: "column", alignItems: "center", listStyleType: "none", margin: "10px 10px", paddingInlineStart:0}}>
        {items.map((item) => (
          <li style={{ width: "70%", listStyleType: "none", margin: "10px 0px"}}>
            <Item key={item} item={item} removeItem={removeItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ItemList as default };