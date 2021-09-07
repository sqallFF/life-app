import React from 'react'
import styled, {css}from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const MenuContainer = styled(motion.div)`
height: 80%;
width: 100%;
background: transparent;
z-index: 10;
display: flex;
justify-content: space-around;
align-items: flex-start;
flex-direction: column;
margin-left: 2%;
`

const MenuItems = styled(Link)`
position: relative;
color: white;
text-decoration: none;
font-weight: bolder;
font-family: roboto;
display: flex;
  justify-content: flex-start;
  align-items: center;
background:  linear-gradient(180deg, #000000 19.27%, grey 200%);
clip-path: polygon(8% 0, 100% 0, 100% 81%, 93% 100%, 0 100%, 0 23%);
width: 97%;
height: 3.5em;

&:before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(180deg, #000 19.27%, #BB0000 100%);
  z-index: -1;
  transition: opacity 0.2s linear;
  opacity: 0;
}

&:hover::before {
  opacity: 1;
}

`

const MenuListContentWrapper =styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(8% 0, 100% 0, 100% 81%, 93% 100%, 0 100%, 0 23%);
   width: 30%;
  height: 4em;
  background-color:  grey;
  transition: all 0.2s linear;

  &:hover {
    background: #BB0000
}
  `
    const container = {
      hidden: { opacity: 0, },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };

    const listItem = {
        hidden: { opacity: 0, y:100 },
        show: { opacity: 1, y: 0 }
      };
function InitalMenu() {
    return (
        <>
        <AnimatePresence exitBeforeEnter>
        <MenuContainer  initial="hidden"
        animate="show"
        exit="hidden"
        variants={container}
        transition={{ ease: "easeOut", duration: 1, staggerChildren: 0.5 }}>
            <MenuListContentWrapper whileHover={{x: 30}} variants={listItem}>
            <MenuItems to='/toDo'>To-Do List </MenuItems>
            </MenuListContentWrapper >
            <MenuListContentWrapper whileHover={{x: 30}} variants={listItem}>
            <MenuItems>Google Fit</MenuItems>
            </MenuListContentWrapper>
             <MenuListContentWrapper whileHover={{x: 30}} variants={listItem}>
            <MenuItems>Notes</MenuItems>
            </MenuListContentWrapper> 
            <MenuListContentWrapper whileHover={{x: 30}} variants={listItem}>
            <MenuItems>Review</MenuItems>
            </MenuListContentWrapper>
        </MenuContainer>
        </AnimatePresence>
        </>
    )
}

export default InitalMenu
