import { DogCard } from "./dogCard";

export function PickDog(): JSX.Element {
  return (
    <>
      <div className="twoDogs">
        <DogCard />
        <DogCard />
      </div>
    </>
  );
}
