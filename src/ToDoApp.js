import ToDoInput from './ToDoInput';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ToDoApp() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    // assuming no duplicates for demo purposes
    setItems([...items, item]);
  };

  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div style={{zIndex: 3}}>
        <h2 style={{fontSize: "2rem", color: "yellow", marginBlockEnd: 0, marginInlineStart: 30}}>To Do Items</h2>
        <ToDoInput addItem={addItem} />
        <ItemList items={items} removeItem={removeItem} />
        <span style={{color: 'white', fontWeight: "bolder"}}>{items.length}</span>
    </div>
  );
}


export default ToDoApp