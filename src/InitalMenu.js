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
color: white;
list-style: none;
font-weight: bolder;
font-family: roboto;
display: flex;
  justify-content: flex-start;
  align-items: center;
background:  linear-gradient(180deg, #000000 19.27%, grey 200%);
clip-path: polygon(8% 0, 100% 0, 100% 81%, 93% 100%, 0 100%, 0 23%);
width: 97%;
height: 3.5em;

&:hover {
    background: #000
}
`

const MenuListContentWrapper =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(8% 0, 100% 0, 100% 81%, 93% 100%, 0 100%, 0 23%);
   width: 30%;
  height: 4em;
  background-color:  grey;
  `
function InitalMenu() {
    return (
        <>
        <AnimatePresence>
        <MenuContainer>
            <MenuListContentWrapper>
            <MenuItems to='/toDo'>To-Do List </MenuItems>
            </MenuListContentWrapper>
            <MenuListContentWrapper>
            <MenuItems>Google Fit</MenuItems>
            </MenuListContentWrapper> <MenuListContentWrapper>
            <MenuItems>Notes</MenuItems>
            </MenuListContentWrapper> <MenuListContentWrapper>
            <MenuItems>Review</MenuItems>
            </MenuListContentWrapper>
        </MenuContainer>
        </AnimatePresence>
        </>

    )
}

export default InitalMenu
