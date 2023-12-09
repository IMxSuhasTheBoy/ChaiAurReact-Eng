import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-sm">Vitw + Tailwind</h1>
      <Card username="Kmando" />
      <Card url="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg" />
      <Card />
      <Card
        post="Staff of Clerk auth"
        username="Lion"
        url="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
      />
    </>
  );
}

export default App;
