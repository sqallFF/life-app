import React, {useState}  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Component } from 'react'


const AddItemForm = ({addItem}) => {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      addItem(item);
      setItem('');
    };
const InputForm = styled.form`
padding: 0;
margin: 0;
`

const ToInput = styled.input`
background: linear-gradient(180deg, #FFF 19.27%, #BB0000 100%);
border: 2px solid red;

border-radius: 18px;
padding: 10px 55px;
`
const ToDoSubmit = styled.button`
background: linear-gradient(180deg, #FFF 19.27%, #BB0000 100%);;
border: none;
padding: 10px 20px;
margin: 0px 0px 0px 5px;
`

return (
            <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
               <InputForm onSubmit={handleSubmit}>
               <ToInput  value={item} onChange={(e) => setItem(e.target.value)}/>
               <ToDoSubmit>Submit</ToDoSubmit>
               </InputForm> 
            </div>
        )
    }
export default AddItemForm 

