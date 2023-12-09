import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  // let counter = 15;

  const addValue = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }; ///reconciliation concept in above comman updation in batching situation

  const decValue = () => {
    setCounter(counter - 1);
  };
  // console.log(counter);
  return (
    <>
      <h1>React {counter} </h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={decValue}>Remove value</button>
      <p>footer : {counter} </p>
    </>
  );
}

export default App;
