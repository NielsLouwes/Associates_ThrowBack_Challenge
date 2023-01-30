import { squadsData } from "./squads";
import { AppUtils } from "./App.utils";

export default function App() {
  const topThreeScoresOverall = AppUtils.findTopThreeOverall;
  // console.log("Top 3 scores overal:", topThreeScoresOverall(squadsData));

  function FindTopThreeChallenges(data) {
    for (const [key, value] of Object.entries(data)) {
      console.log("VALUE", value); // value is only returning the first object so only first
      let scores = [];
      let playerMostPickedActivity = [];
      const squads = value.map((squadMember) => {
        const maxPlayerScore = Math.max(...squadMember.score); // returns max score
        // console.log("max player score:", maxPlayerScore);
        // filtering out those who didn't participate
        // console.log("squad member:", squadMember);
        const maxValueIndex = squadMember.score.indexOf(maxPlayerScore); //returns index of where Max score is being found in each person's list of scores
        scores.push(maxPlayerScore); //its only pushing high scores for 1st squad
        playerMostPickedActivity.push(maxValueIndex); // only pushing scores for 1st squad
        // console.log("maxValueIndex", maxValueIndex);
        // console.log("scores:", scores);
        // if (maxPlayerScore !== 0) {
        // }
      });
      // console.log("playersMostPickedActivity:", playerMostPickedActivity);
      const result = {
        name: key,
        total: playerMostPickedActivity
      };
      return result;
    }
  }

  const findTopThreeChallenges2 = (data) => {
    Object.entries(data).forEach((eachSquad, key) => {
      // console.log(eachSquad)
      // 1 (top level) logics
      let total = 0;
      eachSquad.map((eachSquadMember) => {
        // top level + inner level
        // 1, 1.1, 1.2, 1.3
        console.log(eachSquadMember);
        // total = eachSquadMember.score.reduce(())
      });

      // 1 = aletta = { name, total}
      // 2 = koolhaas = { name, total }
      const result = {
        name: eachSquad[key],
        total
      };
    });
  };

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
    // all squad
    Object.entries(data).forEach((eachSquad, key) => {
      console.log("EACH SQUAD:", eachSquad);
      // 1 (top level) logics
      let total = 0;
      eachSquad.map((eachSquadMember, key) => {
        // top level + inner level
        // 1, 1.1, 1.2, 1.3
        console.log("EACH SQUAD MEMBER:", eachSquadMember);
      });

      // 1 = aletta = { name, total}
      // 2 = koolhaas = { name, total }
      const result = {
        name: eachSquad[key],
        total
      };
    });
  };

  FindTopThreeChallenges(squadsData);

  return <></>;
}

/* TO DO (FindTopThreeChallenges)
1. figure out why its only iterating over Cohen
2. need to map over all values, not just Cohen


*/
