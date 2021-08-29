import './App.css';
import ToDo from './todo';
import BackgroundMove from './backgroundmove';
import MenuText from './MenuText';
import ToDoApp from './ToDoApp'

function App() {
  return (
    <div className="App">
      <MenuText/>
     <ToDoApp/>
      <BackgroundMove>
     </BackgroundMove>
    </div>
  );
}

export default App;
