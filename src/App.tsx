import { PickDog } from "./components/PickDog";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <PickDog />
    </>
  );
}

export default App;
