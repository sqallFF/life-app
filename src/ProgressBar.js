import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const ProgressBar = ({count, items}) => {
   const width = 300
   const percent = count/5
   const CompletionPercent = count *20
  const progress = percent * width
  const itemsLength = items
  const nextPercent = (count - 5) /5

  const ToDoListProgess= nextPercent * width
    let containerStyles = {
      height: 20,
      width: width,
      backgroundColor: "skyblue",
      borderRadius: 50,
      margin: " 23% 11%",
      position: "absolute",
    }
  
    let fillerStyles = {
        width: `${progress}px`,
      height: '100%',
      backgroundColor:  "rgb(62, 122, 235)",
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-i-out',
    }
    let nextFillerStyles = {
        width: `${ToDoListProgess}px`,
      height: '100%',
      backgroundColor:  "rgb(62, 122, 235)",
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
    <>
      { count <= 5 &&<motion.div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{CompletionPercent}%</span>
        </div>
      </motion.div>}
      { count > 5 &&<motion.div style={containerStyles}>
        <div style={nextFillerStyles}>
          <span style={labelStyles}>{nextPercent*100}%</span>
        </div>
      </motion.div>}
      </>
    );
  };

export default ProgressBar
