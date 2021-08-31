import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faCheckCircle, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'


const Item = ({ item, removeItem, count, setCount }) => {
    const InfoSide = styled.p`
  width: 50%;
  text-shadow: 8px 4px 4px rgba(0, 0, 0, 0.89);
  color: white;
  `
const ButtonSide = styled.p`
 border-left: 2px solid #BB0000;
 display: flex;
 justify-content: space-around;
 align-items: center;
width: 40%;
text-shadow: 8px 4px 4px rgba(0, 0, 0, 0.89);
color: white;
`
  const TodoListContentContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  z-index: 2
  `
  const TodoListContentWrapper =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(8% 0, 100% 0, 100% 81%, 93% 100%, 0 100%, 0 23%);
   width: 100%;
  height: 4em;
  background-color:  #BB0000;
  `
  
  const TodoListContent = styled.li`
  display:flex;
  clip-path: polygon(8% 0, 100% 0, 100% 81%, 93% 100%, 0 100%, 0 23%);
  justify-content: center;
  align-items: center;
  font-family: roboto;
  background:  linear-gradient(180deg, #000000 19.27%, #BB0000 100%);
  width: 97%;
  height: 3.5em;
  `
  return (
    <TodoListContentContainer>
          <TodoListContentWrapper>
        <TodoListContent>
          <InfoSide>{item}</InfoSide>
          <ButtonSide>
            <FontAwesomeIcon className="Completion" icon={faCheckCircle}  onClick={() =>{setCount(count + 1)}} />
            <FontAwesomeIcon className="Tomorrow"icon={faCaretSquareDown} />
            <FontAwesomeIcon className="Delete"icon={faWindowClose} onClick={() => removeItem(item)}/>
          </ButtonSide>
          </TodoListContent>
          </TodoListContentWrapper>
          </TodoListContentContainer>
  );
};

export default Item;