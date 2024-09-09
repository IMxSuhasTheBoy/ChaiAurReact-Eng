import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-sky-400 p-3 rounded-md">
        Tailwind configuration + props + components
      </h1>

      <Card username="Happy Person*" post="BootLooped Developer" />
      <Card username="Flappy Person*" post="Configurator" />
    </>
  );
}

export default App;
