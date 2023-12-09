import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TestComponent from "./TestComponent.jsx";

const myReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom react app</h1>
    </div>
  );
}

const TestDirectUse = (
  <a href="https://google.com" target="_blank">
    Vistosss
  </a>
);

const Actual_ReactElement_Object_BreakDown = React.createElement(
  "a", ///type

  { href: "https://google.com", target: "_blank" }, ///attributes

  "Made with React.createElement", ///children

  " " //{exp of JSX comp...}//this 4th object comes when theres evaluated expressions are recieved, NOTE: Its for rendering purpose (But expressions that is to be evaluated are not acceptable for rendering) empty string as 4th object can be your bug prevention strat.
); // console.log(Actual_ReactElement_Object_BreakDown)

ReactDOM.createRoot(document.getElementById("root")).render(
  // TestDirectUse
  // Actual_ReactElement_Object_BreakDown

  <App />
);
