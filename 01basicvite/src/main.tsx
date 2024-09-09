import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import './index.css'

/*
const customReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
*/

/*
const AnotherCustomElement = (
  <a href="https://google.com" target="_blank">
    |Click me to visit google|
  </a>
);
*/

/*
// things passed through createElement are then converted to a object(expected by react) to loop onto to finally render
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Visit google",
  AnotherCustomElement
);
*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//
/*
createRoot(document.getElementById("root")!).render(
  // AnotherCustomElement
  reactElement
);
*/
