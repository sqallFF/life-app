import './App.css';
import ToDo from './todo';
import BackgroundMove from './backgroundmove';
import MenuText from './MenuText';
import ToDoApp from './ToDoApp'
import App1 from './App1';
import TimeDate from './Time&Date';
import InitalMenu from './InitalMenu';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <MenuText/>
      <Route path="/" exact component={InitalMenu}/>
     <Route path="/toDo" exact component={ToDoApp}/>
      <BackgroundMove>
     </BackgroundMove>
  <TimeDate/>
    </div>
    </Router>
  );
}

export default App;
