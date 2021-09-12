import React, {useState}  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Component } from 'react'

const ToInput = styled.input`
background: linear-gradient(180deg, black 19.27%, grey 250%);
border: 2px solid grey;
padding: 10px 55px;
color: white;
clip-path: polygon(8% 0, 100% 0%, 91% 100%, 0% 100%);

&:focus{
    outline: none;
}
`
const InputForm = styled.form`
padding: 0;
margin: 0;
`

const ToDoSubmit = styled(motion.button)`
background: linear-gradient(180deg, black 19.27%, blue 250%);
border: 2px solid blue;
color: white;
padding: 10px 20px;
margin: 0px 0px 0px 5px;
clip-path: polygon(15% 0, 100% 0%, 84% 100%, 2% 100%);

`
const AddItemForm = ({addItem}) => {
    const [item, setItem] = useState('hello');

    const handleSubmit = (e) => {
      e.preventDefault();
      addItem(item);
      setItem('');
    };
return (
            <motion.div style={{display: "flex", justifyContent:"center", alignItems:"center", position:"absolute", marginLeft:100, marginTop: 120}}>
               <InputForm onSubmit={handleSubmit}>
               <ToInput type="text" placeholder="Add Something To Do" value={item} onChange={(e) => setItem(e.target.value)}/>
               <ToDoSubmit>Submit</ToDoSubmit>
               </InputForm> 
            </motion.div>
        )
    }
export default AddItemForm 

