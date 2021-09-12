import './App.css';
import BackgroundMove from './backgroundmove';
import MenuText from './MenuText';
import ToDoApp from './ToDoApp'
import TimeDate from './Time&Date';
import InitalMenu from './InitalMenu';
import {AnimatePresence} from "framer-motion"
import { Switch, Route, useLocation} from "react-router-dom"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <MenuText/>
      <AnimatePresence intial={true} exitBeforeEnter>
      <Switch location={location} key={location.key}>
      <Route path="/" exact component={InitalMenu}/>
     <Route path="/toDo" exact component={ToDoApp}/>
     </Switch>
     </AnimatePresence>
      <BackgroundMove>
     </BackgroundMove>
  <TimeDate/>
    </div>
  );
}

export default App;
