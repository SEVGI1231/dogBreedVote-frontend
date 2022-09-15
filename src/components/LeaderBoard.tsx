import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IOneDogVote } from "../types";
import { TopThreeDogs } from "./TopThreeDogs";


export function LeaderBoard(): JSX.Element {
  const [topTenDogs, setTopTenDogs] = useState<IOneDogVote[]>();
  async function getTopTen() {
    try {
      const response = await axios.get(
        "https://dog-breed-vote-sevgi-keadeish.herokuapp.com/"
      );
      const topTen = response.data;
      setTopTenDogs(topTen);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getTopTen();
  }, [setTopTenDogs]);
  function  handleRefreshButton(){
    getTopTen()
  }

  return (
    <>
      <h1>LeaderBoard</h1>
      {topTenDogs &&
        topTenDogs.map((oneDog: IOneDogVote) => (
            <li key={oneDog.breed_id}>{oneDog.breed_name} - {oneDog.votes}</li>
        ))}
        <Button variant="success"
            size="lg" onClick={()=> handleRefreshButton()}>Refresh</Button>
        
    </>
  );
}
