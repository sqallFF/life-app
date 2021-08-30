import React, {useState}  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Component } from 'react'

const ToInput = styled.input`
background: linear-gradient(180deg, #FFF 19.27%, grey 200%);
border: 2px solid grey;
border-radius: 18px;
padding: 10px 55px;
color: black;
`
const InputForm = styled.form`
padding: 0;
margin: 0;
`

const ToDoSubmit = styled.button`
background: linear-gradient(180deg, #FFF 19.27%, #BB0000 100%);;
border: none;
padding: 10px 20px;
margin: 0px 0px 0px 5px;
`

const AddItemForm = ({addItem}) => {
    const [item, setItem] = useState('hello');

    const handleSubmit = (e) => {
      e.preventDefault();
      addItem(item);
      setItem('');
    };
return (
            <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
               <InputForm onSubmit={handleSubmit}>
               <ToInput key='editor1' type="text" placeholder="Add Something To Do" value={item} onChange={(e) => setItem(e.target.value)}/>
               <ToDoSubmit>Submit</ToDoSubmit>
               </InputForm> 
            </div>
        )
    }
export default AddItemForm 

