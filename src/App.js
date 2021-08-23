import './App.css';
import ToDo from './todo';
import BackgroundMove from './backgroundmove';
import MenuText from './MenuText';
function App() {
  return (
    <div className="App">
      <MenuText/>
      <ToDo></ToDo>
      <BackgroundMove>
     </BackgroundMove>
    </div>
  );
}

export default App;
