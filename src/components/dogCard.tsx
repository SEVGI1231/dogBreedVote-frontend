import axios from "axios";
import { useEffect, useState } from "react";
import { IDogInfo } from "../types";

export function DogCard(): JSX.Element {
  const [dogInfo, setDogInfo] = useState<IDogInfo>();
  async function loadData() {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      const data: IDogInfo = response.data;
      setDogInfo(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    loadData();
  }, [setDogInfo]);

  const urlInfo: string[] | undefined = dogInfo && dogInfo.message.split("/");
  const dogBreed = urlInfo && urlInfo[4].replace("-", " ").toUpperCase();

  function handleVote(dogBreed: string | undefined) {
    axios.post("http://localhost:4000/", {
      breedName: dogBreed,
    });
    window.location.reload();
  }
  return (
    <>
      <img src={dogInfo?.message} />
      <button onClick={() => handleVote(dogBreed)}>{dogBreed}</button>
    </>
  );
}
