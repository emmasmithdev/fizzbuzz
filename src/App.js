import React, {useState, useEffect} from "react";
import './App.css';

function App() {

  const [number, setNumber] = useState(1);
  const [output, setOutput] = useState(0);

  useEffect( () => {
    console.log("effect triggered");
    if (number % 3 === 0 && number % 5 === 0) {
      setOutput("fizzbuz")
    } else if (number % 3 === 0) {
      setOutput("fizz")
    } else if (number % 5 === 0) {
      setOutput("buzz")
    } else {
      setOutput(number);
    }
  }, [number])

  const handleInc = () => {
    setNumber(number + 1);
  }

  return (
    <div className="App">
      <button value={number} onClick={handleInc}>+</button>
      <h2>The current number is {number}</h2>
      <h2>The answer is {output}</h2>
    </div>
  );
}

export default App;
