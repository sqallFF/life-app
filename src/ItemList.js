import React from 'react';
import Item from './item';
import { AnimatePresence, motion } from 'framer-motion';


const ItemList = ({ items, removeItem, count, setCount }) => {
  const container = {
    hidden: { opacity: 0, },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };
  
  const listItem = {
    hidden: { opacity: 0, y:100 },
    show: { opacity: 1, y: 0 }
  };
  

  return (
    <div className="items-container">
      <motion.ul variants={container} initial="hidden" animate="show" style={{ display: "flex", justifyContent:"center",flexDirection: "column", alignItems: "flex-end", listStyleType: "none", margin: "10px 10px", paddingInlineStart:0}}>
        {items.map((item, i) => (
          <AnimatePresence>
          <motion.li key={i} variants={listItem} style={{ width: "90%", listStyleType: "none", marginRight: 10, marginBottom: 20}}>
            <Item key={item} item={item} count={count} setCount={setCount} removeItem={removeItem} />
          </motion.li>
          </AnimatePresence>
        ))}
      </motion.ul>
    </div>
  );
};

export { ItemList as default };