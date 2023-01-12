import { squadsData } from "./squads";

export default function App() {
  function findTopThreeOverall(data) {
    for (const [key, value] of Object.entries(data)) {
      const squads = value.map((item) => {
        return { name: item.name, score: item.score.reduce((a, b) => a + b) };
      });

      console.log("squads", squads);

      const sortedScores = squads.sort((a, b) => b.score - a.score); // Sorted within each squad so far
      const firstInSquad = sortedScores[0];
      console.log("sortedScores", sortedScores);
      console.log("first in SQuad", firstInSquad);

      //trying ot merge them
    }
  }

  findTopThreeOverall(squadsData);

  return <div className="App"></div>;
}
