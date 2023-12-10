import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // for passing ref(generatePW) of useCallback func,
  const generatePW = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&+=";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      // console.log(char);

      pass += str.charAt(char);
      // console.log(str.charAt(char));
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPWtoClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();

    // passwordRef.current?.setSelectionRange(0, 3);
  };

  useEffect(() => {
    generatePW();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md flex flex-col items-center rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-center my-5 text-2xl text-orange-400">
          Password Generator
        </h1>
        <div className="flex rounded-lg overflow-hidden py-4 px-3  bg-gray-600">
          <input
            className="outline-none w-full py-1 px-3 rounded-l-lg"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700
           text-white px-3 py-0.5 shrink-0 shadow-xl rounded-r-lg"
            onClick={copyPWtoClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm bg-slate-50/5 justify-between min-w-full rounded-t-lg p-6">
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={12}
              value={length}
              id="lengthRange"
              onChange={(e) => {
                {
                  setLength(e.target.value);
                }
              }}
            />
            <label htmlFor="lengthRange">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prevVal) => !prevVal);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prevVal) => !prevVal);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
