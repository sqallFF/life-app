import React from 'react';
import Item from './item';
import { AnimateSharedLayout, motion } from 'framer-motion';


const ItemList = ({ items, removeItem, count, setCount }) => {
  const listItem = {
    hidden: { opacity: 0, y:100 },
    show: { opacity: 1, y: 0 },
  };
  

  return (
    <motion.div className="items-container">
      <motion.ul style={{ display: "flex", justifyContent:"center",flexDirection: "column", alignItems: "flex-end", listStyleType: "none", margin: "10px 10px", paddingInlineStart:0}}>
        {items.map(item => (
          <motion.li  variants={listItem} style={{ width: "90%", listStyleType: "none", marginRight: 10, marginBottom: 20}}>
            <Item key={item} item={item} count={count} setCount={setCount} removeItem={removeItem} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export { ItemList as default };