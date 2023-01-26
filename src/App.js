import { squadsData } from "./squads";
import { AppUtils } from "./App.utils";

export default function App() {
  const topThreeScoresOverall = AppUtils.findTopThreeOverall;
  // console.log("Top 3 scores overal:", topThreeScoresOverall(squadsData));

  function FindTopThreeChallenges(data) {
    for (const [key, value] of Object.entries(data)) {
      let players = [];
      const squads = value.map((item) => {
        const maxPlayerScore = Math.max(...item.score); // returns max score
        console.log("max player score:", maxPlayerScore);
        if (maxPlayerScore !== 0) {
          // filtering out those who didn't participate
          const maxValueIndex = item.score.indexOf(maxPlayerScore); //returns index of where Max score is being found in each person's list of scores
          return {
            squad: key,
            name: item.name,
            topChallengeIndex: maxValueIndex
          };
        }
      });
      // console.log("maxPlayerScore:", maxPlayerScore);
      players.push(squads); // we now have objects for each players with their most played challenge
      const newArray = players.flat(); //this returns the indexes of most occuring highest scores

      // console.log("Index of MAX Score", newArray);
    }
  }

  function FindTopScoringSquads(data) {
    for (const [key, value] of Object.entries(data)) {
      let players = [];
      const squads = value.map((item) => {
        return {
          squad: key,
          name: item.name,
          score: item.score.reduce((a, b) => a + b)
        };
      });

      console.log("squads:", squads);

      const getSquadScores = squads.map((squad) => {
        return {
          name: squad.name,
          overallScore: squad.score
        };
      });

      console.log("getSquadScores", getSquadScores);

      const scores = getSquadScores.map((squad) => {
        return {
          name: squad.name,
          overallScore: squad.overallScore
        };
      });

      console.log("SCORES: ", scores);

      const newArray = scores.flat();
      const addUpScores = newArray.reduce((a, b) => a + b); // its returning scores per squad, but i've lost the squad names
      console.log(addUpScores);
    }
  }

  FindTopScoringSquads(squadsData);

  return <></>;
}

// psuedo code
// Check each score for each person, return the index number of the highest number
// The three highest numbers can then be deduced from this

// Array.indexOf(Math.max(...Array));

// const arr = [30, 20, 50, 70, 10, 40, 17];
// console.log("Array is: ", arr);

// // find the max value
// const max_val = Math.max(...arr);

// // find the index of highest value
// const max_index = arr.indexOf(max_val);
