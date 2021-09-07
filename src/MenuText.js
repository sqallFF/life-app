import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const MenuContainer = styled.div`
display: flex;
z-index: 0;
height: 10vh;
border-bottom: 4px solid blue;
justify-content: space-between;
align-content: center;
text-align: center;
background: linear-gradient(180deg, #000000 0%, #000061 54.69%);
box-shadow: -43px 1px 23px 19px rgba(0,0,0,1);
-webkit-box-shadow: -43px 1px 23px 19px rgba(0,0,0,1);
-moz-box-shadow: -43px 1px 23px 19px rgba(0,0,0,1);
z-index:10
`

const MenuTex = styled(Link)`
height: 70%;
padding: 0px 45px;
margin-top: .55em;
background-color: blue;
display: flex;
align-content: center;
justify-content: center;
width: 6em;
box-shadow: 9px 4px 4px rgba(0, 0, 0, 0.49);
border-radius: 50px;
transform: translateX(-20%);
text-decoration: none;
`
const Text = styled(motion.h1)`
margin:0;
padding: 0;
color: #FFFFFF;
text-shadow: 8px 4px 4px rgba(0, 0, 0, 0.69);
opacity: 0;
`

const CityName = styled.h2`
padding: 0;
margin-right: .3em;
color: yellow;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`

function MenuText() {
    return (
        
        <MenuContainer>
           <MenuTex 
           animate= {{ x: -40 }}
           transition={{duration: .2 }} to="/">
               <Text animate= {{ opacity: 1 }}  transition={{duration: .4 }}>Menu</Text>
            </MenuTex> 
            <CityName>Colorado Springs, CO</CityName>
       </MenuContainer>
    )
}

export default MenuText
