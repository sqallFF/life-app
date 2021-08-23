import './App.css';
import React, {Component}from 'react';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faCheckCircle, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'


class ToDo extends Component {
  constructor (props) {
    super (props)
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((data) => this.setState({posts: data}))
  }
 
render () {
  const InfoSide = styled.p`
  width: 75%;
  text-shadow: 8px 4px 4px rgba(0, 0, 0, 0.89);
  color: white;
  `
const ButtonSide = styled.p`
 border-left: 2px solid #BB0000;
 display: flex;
 justify-content: space-around;
 align-items: center;
width: 25%;
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
   width: 30.6em;
  height: 3.5rem;
  background-color:  #BB0000;
  `
  
  const TodoListContent = styled.li`
  display:flex;
  clip-path: polygon(8% 0, 100% 0, 100% 81%, 93% 100%, 0 100%, 0 23%);
  justify-content: center;
  align-items: center;
  font-family: roboto;
  background:  linear-gradient(180deg, #000000 19.27%, #BB0000 100%);
  width: 30em;
  height: 3rem;
  `
    const PostItems = this.state.posts.map(post => (
      <div key={post.id}>
       <TodoListContentContainer>
            <TodoListContentWrapper>
          <TodoListContent>
            <InfoSide>{post.title}</InfoSide>
            <ButtonSide>
              <FontAwesomeIcon className="Completion" icon={faCheckCircle} />
              <FontAwesomeIcon className="Tomorrow"icon={faCaretSquareDown} />
              <FontAwesomeIcon className="Delete"icon={faWindowClose} />
            </ButtonSide>
            </TodoListContent>
            </TodoListContentWrapper>
            </TodoListContentContainer>
      </div>
    ));
    return (
//         <div>
// {PostItems}
         <TodoListContentContainer>
          <TodoListContentWrapper>
        <TodoListContent>
          <InfoSide>Create Flyer for Tutoring Idea</InfoSide>
          <ButtonSide>
            <FontAwesomeIcon className="Completion" icon={faCheckCircle} />
            <FontAwesomeIcon className="Tomorrow"icon={faCaretSquareDown} />
            <FontAwesomeIcon className="Delete"icon={faWindowClose} />
          </ButtonSide>
          </TodoListContent>
          </TodoListContentWrapper>
          </TodoListContentContainer>
      // </div>
    )
}
}

export default ToDo;
