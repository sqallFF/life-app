import ToDoInput from './ToDoInput';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
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

  const ToDoContainer = styled(motion.div)`
  z-index: 1;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
  width: 20px;
}


/* Track */
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
  box-shadow: inset 5px 0 20px blue;
}
  `
  const ToDoTitle = styled.h2`
  color: yellow;
 margin-left: 10px;
 padding: 0;
 width: 50%;
 border-bottom-width: 2px;
 border-top-width: 0px;
 border-left-width: 0px;
border-style: solid;
border-image:  linear-gradient(90deg,yellow 0%, rgba(0,0,0,0) 74%) 1 stretch;
`
  return (
    <AnimatePresence>
    <ToDoContainer initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
        <ToDoTitle style={{ position: 'fixed',
          fontSize: "2rem",
           color: "yellow",
            marginBlockEnd: 0, 
            marginInlineStart: 30,
             borderBottom: "2px solid yellow"
             }}>To Do Items</ToDoTitle>
        <ProgressBar count={count} style={{position: 'fixed'}} items={items.length}/>
        <ToDoInput addItem={addItem}></ToDoInput>
        <ItemList items={items} count={count} setCount={setCount} removeItem={removeItem} />
    </ToDoContainer>
    </AnimatePresence>
  );
}


export default ToDoApp