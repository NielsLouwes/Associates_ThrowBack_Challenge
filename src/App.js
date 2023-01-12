import { squadsData } from "./squads";

export default function App() {
  function findTopThreeOverall(data) {
    for (const [key, value] of Object.entries(data)) {
      const squads = value.map((item) => {
        return { name: item.name, score: item.score.reduce((a, b) => a + b) };
      });

      console.log(squads);

      const sortedScores = squads.sort((a, b) => b.score - a.score); // Sorted within each squad so far
      console.log(sortedScores);
    }
  }

  findTopThreeOverall(squadsData);

  return <div className="App"></div>;
}
