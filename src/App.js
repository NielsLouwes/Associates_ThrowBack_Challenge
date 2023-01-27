import { squadsData } from "./squads";
import { AppUtils } from "./App.utils";

export default function App() {
  const topThreeScoresOverall = AppUtils.findTopThreeOverall;
  // console.log("Top 3 scores overal:", topThreeScoresOverall(squadsData));

  function FindTopThreeChallenges(data) {
    for (const [key, value] of Object.entries(data)) {
      let playerMostPickedActivity = [];
      const squads = value.map((squadMember) => {
        const maxPlayerScore = Math.max(...squadMember.score); // returns max score
        // console.log("max player score:", maxPlayerScore);
        if (maxPlayerScore !== 0) {
          // filtering out those who didn't participate
          const maxValueIndex = squadMember.score.indexOf(maxPlayerScore); //returns index of where Max score is being found in each person's list of scores

          playerMostPickedActivity.push(maxValueIndex);
          console.log("maxValueIndex", maxValueIndex);
        }
      });
      console.log("playersMostPickedActivity:", playerMostPickedActivity);
      const result = {
        name: key,
        total: playerMostPickedActivity
      };
      return result;
    }
  }

  const FindTopScoringSquads2 = (data) => {
    let scores = [];
    const firstSquad = data.Cohen.map((members) => {
      console.log("members", members); // return all members of Cohen

      scores = members.score.reduce((a, b) => a + b);
      console.log("scores", scores);
      return scores;
    });

    const result = {
      scores: scores
    };

    return result;
  };

  const FindTopScoringSquads = (data) => {
    for (const squad in squadsData) {
      // console.log("squad:", squad);
      for (const person of squadsData[squad]) {
        // console.log("squadsData", squadsData[squad]);
        let totalScore = 0;
        for (const score of person.score) {
          totalScore += score;
        }
        console.log(`${person.name}'s total score is ${totalScore}`);
      }
    }
  };

  FindTopThreeChallenges(squadsData);

  return <></>;
}
