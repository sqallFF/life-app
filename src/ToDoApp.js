import ToDoInput from './ToDoInput';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import ProgressBar from './ProgressBar';

function ToDoApp() {
  const [count, setCount] = useState(0);
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
        <ItemList items={items} count={count} setCount={setCount} removeItem={removeItem} />
        <ProgressBar count={count}/>
    </div>
  );
}


export default ToDoApp