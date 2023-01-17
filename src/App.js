import { squadsData } from "./squads";
import { AppUtils } from "./App.utils";

export default function App() {
  const topThreeScoresOverall = AppUtils.findTopThreeOverall;
  // console.log("Top 3 scores overal:", topThreeScoresOverall(squadsData));

  function FindTopThreeChallenges(data) {
    for (const [key, value] of Object.entries(data)) {
      let players = [];
      const squads = value.map((item) => {
        const maxPlayerScore = Math.max(...item);
        return {
          squad: key,
          name: item.name,
          score: Math.max(item.score.map((item)));
        };
      });
      console.log("squads:", squads.score);
    }
  }

  console.log(FindTopThreeChallenges(squadsData));

  return <></>;
}

// psuedo code
// Check each score for each person, return the index number of the highest number
// The three highest numbers can then be deduced from this

// let array = [1, 2, 0, -5, 8, 3];

// console.log(Math.max(...array)); //=> 8
