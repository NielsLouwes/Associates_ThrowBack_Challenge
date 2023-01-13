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

      players.push(squads); // returns an array of arrays with objects
      // trying to flatten this now to get all in one array
      console.log(players);
      const newArray = players.flat(); // new flattened array now has one array with many objects
      console.log("new Array:", newArray);

      // will now try to compare all scores

      //return top 3 scoresa
    }
  }

  findTopThreeOverall(squadsData);

  return <div className="App"></div>;
}

// const compareScores = newArray.map((item) => {
//         return {
//           item: item.name,
//           score: item.score.sort((a, b) => b.item.score - a.item.score)
//         };
//       });
