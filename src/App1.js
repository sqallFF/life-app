import React, {useState, useEffect} from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

const testData = [
  { bgcolor: "#6a1b9a", completed: 60 }
];

function App1() {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
      setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 7000);
    }, []);
  
    return (
      <div className="App">
        <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
      </div>
    );
  }

export default App1;