// 3: create a custom render method
function customRenderMethod(reactElement, container) {
  // 3.1: create a dom element (type, children)
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  // 3.2: set attributes to the dom element
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // 3.3: append the dom element to the container
  container.appendChild(domElement);
}

// 1: create a react element data structure
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

// 2: select the root element (where to inject)
const mainContainer = document.querySelector("#root");

// 4: use the customRenderMethod to inject the reactElement into the DOM (what to inject)
customRenderMethod(reactElement, mainContainer);
// using customRenderMethod( **passing what to inject, where to inject** )
