import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [color, setColor] = useState("orangered");

  function changeColor(color: string) {
    setColor(color);
  }

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-row justify-center gap-3 shadow-xl bg-orange-400/50 px-2 rounded-2xl py-1">
          <button
            onClick={() => changeColor("grey")}
            className="bg-sky-200/20 text-white px-4 py-1 hover:bg-orange-600 rounded-2xl shadow-xl"
          >
            test
          </button>

          <button
            onClick={() => setColor("black")}
            className="bg-sky-600/20 text-white px-4 py-1 hover:bg-orange-600 rounded-2xl shadow-xl"
          >
            test
          </button>
          {/*
           */}

          <Button color="red" onClick={() => setColor("red")} />
          <Button color="blue" onClick={() => setColor("blue")} />
          <Button color="green" onClick={() => setColor("green")} />
          <Button color="yellow" onClick={() => setColor("yellow")} />
          <Button color="purple" onClick={() => setColor("purple")} />
        </div>
      </div>
    </div>
  );
}

export default App;
