import ToDoInput from './ToDoInput';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';
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

  const ToDoTitle = styled.h2`
  color: yellow;
 margin-left: 10px;
 padding: 0;
 width: 100%;
 border-bottom-width: 2px;
 border-top-width: 0px;
 border-left-width: 0px;
border-style: solid;
border-image:  linear-gradient(90deg,yellow 0%, rgba(0,0,0,0) 74%) 1 stretch;
`
  return (
    <div style={{zIndex: 3, overflowY: "scroll", overflowX:"hidden"}}>
        <ToDoTitle style={{fontSize: "2rem", color: "yellow", marginBlockEnd: 0, marginInlineStart: 30, borderBottom: "2px solid yellow"}}>To Do Items</ToDoTitle>
        <ProgressBar count={count} items={items.length}/>
        <ToDoInput addItem={addItem}></ToDoInput>
        <ItemList items={items} count={count} setCount={setCount} removeItem={removeItem} />
    </div>
  );
}


export default ToDoApp