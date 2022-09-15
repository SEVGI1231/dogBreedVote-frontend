import { PickDog } from "./components/PickDog";
import "./App.css";
import { LeaderBoard } from "./components/LeaderBoard";

function App(): JSX.Element {
  return (
    <>
      <h1 className="title">Choose Their Fate</h1>
      <PickDog />
      <LeaderBoard />
    </>
  );
}

export default App;
