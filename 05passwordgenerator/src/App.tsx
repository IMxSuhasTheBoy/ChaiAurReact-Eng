import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8); // Password length, default 8
  const [numberAllowed, setNumberAllowed] = useState(false); // Toggle for including numbers
  const [charAllowed, setCharAllowed] = useState(false); // Toggle for including special characters
  const [password, setPassword] = useState(""); // Generated password

  const passwordRef = useRef(null); // Reference to password input field

  // Function to generate password
  const generatePW = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Base character set

    // Add numbers and special characters to character set if allowed
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&+=";

    // Generate password by randomly selecting characters
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass); // Update password state
  }, [length, numberAllowed, charAllowed]); // Dependencies for useCallback

  // Function to copy password to clipboard
  const copyPWtoClipboard = () => {
    window.navigator.clipboard.writeText(password);

    // Select the password text in the input field after copying (ui effect)
    if (passwordRef.current) {
      (passwordRef.current as HTMLInputElement).select();
    }
  };

  // Effect to generate password when dependencies change
  useEffect(() => {
    generatePW();
  }, [length, numberAllowed, charAllowed, generatePW]);

  // UI rendering
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md flex flex-col items-center rounded-lg px-4 my-8 bg-gray-600">
        <h1 className="text-center my-5 text-2xl font-semibold tracking-wider">
          password generator
        </h1>

        {/* Password display and copy button */}
        <div className="flex rounded-lg overflow-hidden shadow-xl mb-5">
          <input
            className="outline-none w-full py-1 px-3 rounded-l-lg"
            readOnly
            type="text"
            value={password}
            placeholder="password"
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 px-3 py-0.5 shrink-0 rounded-r-lg"
            onClick={copyPWtoClipboard}
          >
            copy
          </button>
        </div>

        {/* Password options */}
        <div className="flex text-sm font-semibold tracking-wider bg-slate-50/5 justify-between min-w-full rounded-t-lg py-6 px-4 shadow-2xl">
          {/* Length slider */}
          <div className="flex flex-col items-center justify-center gap-y-1.5">
            <label htmlFor="lengthRange">
              Length : <span className="text-base">{length}</span>
            </label>
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={12}
              value={length}
              id="lengthRange"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
          </div>

          {/* Numbers toggle */}
          <div className="flex flex-col items-center justify-center gap-y-1.5">
            <label className="cursor-pointer" htmlFor="numberInput">
              Numbers
            </label>
            <input
              className="cursor-pointer w-3.5 h-3.5"
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prevVal) => !prevVal);
              }}
            />
          </div>

          {/* Special characters toggle */}
          <div className="flex flex-col items-center justify-center gap-y-1.5">
            <label className="cursor-pointer" htmlFor="characterInput">
              Characters
            </label>
            <input
              className="cursor-pointer w-3.5 h-3.5"
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prevVal) => !prevVal);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
