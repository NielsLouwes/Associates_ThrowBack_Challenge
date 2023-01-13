import { squadsData } from "./squads";

export default function App() {
  function findTopThreeOverall(data) {
    let players = [];
    for (const [key, value] of Object.entries(data)) {
      const squads = value.map((item) => {
        return {
          squad: key,
          name: item.name,
          score: item.score.reduce((a, b) => a + b)
        };
      });

      players.push(squads);

      const newArray = players.flat();
      const sortedScores = newArray
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      return sortedScores;
    }
  }

  console.log("Top 3 scores overal:", findTopThreeOverall(squadsData));

  return <div className="App"></div>;
}

// const compareScores = newArray.map((item) => {
//         return {
//           item: item.name,
//           score: item.score.sort((a, b) => b.item.score - a.item.score)
//         };
//       });
