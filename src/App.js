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

  const FindTopScoringSquads = (data) => {
    let scores = [];
    const firstSquad = data.Cohen.map((members) => {
      // console.log("members", members); // return all members of Cohen

      scores = members.score.reduce((a, b) => a + b);
      // console.log("scores", scores);
      return scores;
    });

    const result = {
      scores: scores
    };

    return result;
  };

  FindTopScoringSquads(squadsData);

  return <></>;
}
