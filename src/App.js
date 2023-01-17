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
        const maxValueIndex = item.score.indexOf(maxPlayerScore); //returns index of where Max score is being found in each person's list of scores
        // return {
        //   squad: key,
        //   name: item.name,
        //   score: Math.max(item.score.map((item)));
        // };
        // console.log("maxPlayerScore:", maxPlayerScore);
        console.log("Index of MAX Score", maxValueIndex);
      });
    }
  }

  console.log(FindTopThreeChallenges(squadsData));

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
