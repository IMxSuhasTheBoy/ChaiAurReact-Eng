import { useState } from "react"; // useState is a hook that is used to create a state variable
import "./App.css";

function App() {
  /*
    - in react cannot do the following in the way in js is uesed to, React has taken over the controll to update the UI,
    - React is providing an mechanism to update anything the UI and it is not allowing to do it manually
    - With the state react is monitoring the changes and re-rendering the UI

  let count = 0;

  const addValue = () => {
    count = count + 1;
    console.log(count);
  };

  const removeValue = () => {
    count = count - 1;
    console.log(count);
  };
  */

  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const removeValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Current value : {count}</h2>
      <button onClick={addValue}>Increment</button>{" "}
      <button onClick={removeValue}>Decrement</button>
      <p>Just using it here too : {count}</p>
    </>
  );
}

export default App;
