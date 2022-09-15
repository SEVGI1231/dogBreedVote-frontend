import { PickDog } from "./components/PickDog";
import "./App.css";
import { LeaderBoard } from "./components/LeaderBoard";

function App(): JSX.Element {
  return (
    <>
      <PickDog />
      <LeaderBoard />
    </>
  );
}

export default App;
