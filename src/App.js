import './App.css';
import ToDo from './todo';
import BackgroundMove from './backgroundmove';
import MenuText from './MenuText';
import ToDoApp from './ToDoApp'
import App1 from './App1';
import TimeDate from './Time&Date';

function App() {
  return (
    <div className="App">
      <MenuText/>
     <ToDoApp/>
      <BackgroundMove>
     </BackgroundMove>
  <TimeDate/>
{/* <App1></App1> */}
    </div>
  );
}

export default App;
