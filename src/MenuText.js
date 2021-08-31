import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const MenuContainer = styled.div`
display: flex;
height: 10vh;
justify-content: space-between;
align-content: center;
text-align: center;
background: linear-gradient(180deg, #000000 0%, #000061 54.69%);
`

const MenuTex = styled.div`
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
transform: translate(-15%);
`
const Text = styled.h1`
margin:0;
padding: 0;
color: #FFFFFF;
text-shadow: 8px 4px 4px rgba(0, 0, 0, 0.69);

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
           <MenuTex>
               <Text>Menu</Text>
            </MenuTex> 
            <CityName>Colorado Springs, CO</CityName>
       </MenuContainer>
    )
}

export default MenuText
