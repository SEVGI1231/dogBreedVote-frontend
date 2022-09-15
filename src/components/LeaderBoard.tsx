import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { IOneDogVote } from "../types";

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
  function handleRefreshButton() {
    getTopTen();
  }

  return (
    <div className="leaderbord-container">
        <Card className="leaderboard mb-2 text-centre" border="success"  >
            <Card.Header>LEADER BOARD</Card.Header>
            <ListGroup variant="flush"></ListGroup>
            {topTenDogs &&
        topTenDogs.map((oneDog: IOneDogVote) => (
          <ListGroup.Item key={oneDog.breed_id}>
            {oneDog.breed_name} - {oneDog.votes}
          </ListGroup.Item>
           ))}
            <Button variant="success" size="lg" onClick={() => handleRefreshButton()}>
        Refresh
      </Button>
        </Card>
     
     
    </div>
  );
}
