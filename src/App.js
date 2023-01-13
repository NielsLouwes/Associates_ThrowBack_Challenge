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

      console.log("squads", squads);

      const sortedScores = squads.sort((a, b) => b.score - a.score); // Sorted within each squad so far

      players.push(squads); // returnsan array of arrays with objects
      // trying to flatten this now to get all in one thing
      console.log(players);
      const newArray = players.flat(); // new flattened array now has one array with many objects
      console.log("new Array:", newArray);
    }
  }

  findTopThreeOverall(squadsData);

  return <div className="App"></div>;
}

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // Expected output: Array [0, 1, 2, 3, 4]
