import axios from "axios";
import { useEffect, useState } from "react";
import { IDogInfo } from "../types";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

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
    axios.post("https://dog-breed-vote-sevgi-keadeish.herokuapp.com/", {
      breedName: dogBreed,
    });
    window.location.reload();
  }
  return (
    <>
      <Card className="text-centre">
        <Card.Img
          className="dog-img"
          variant="top"
          src={dogInfo?.message}
          alt={dogInfo?.message}
        />
        <Card.Body>
          <Button
            onClick={() => handleVote(dogBreed)}
            variant="success"
            size="lg"
          >
            {dogBreed}
          </Button>
        </Card.Body>
      </Card>
      {/* <img src={dogInfo?.message} alt={dogInfo?.message}/> */}
      {/* <button onClick={() => handleVote(dogBreed)}>{dogBreed}</button> */}
    </>
  );
}
