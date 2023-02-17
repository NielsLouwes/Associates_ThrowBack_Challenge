import { squadsData } from "./squads";
import { themes } from "./themes";
import { AppUtils } from "./App.utils";

export default function App() {
  function FindMostParticipatedChallenge(data) {
    let maxScoresIndexes = [];
    for (const squad of Object.values(data)) {
      // console.log("squad:", squad);
      squad.forEach((squadMember) => {
        const maxPlayerScore = Math.max(...squadMember.score); // returns max score
        // console.log("maxPlayerScore:", maxPlayerScore);
        if (maxPlayerScore !== 0) {
          // now we didn't add indexes if person didn't have a score
          const maxValueIndex = squadMember.score.indexOf(maxPlayerScore);
          maxScoresIndexes.push(maxValueIndex);
        }
      });
      // console.log("maxScoresIndexes", maxScoresIndexes);
    }

    let frequency = {};
    let maxCount = 0;
    let mostFrequent;

    for (let i = 0; i < maxScoresIndexes.length; i++) {
      if (frequency[maxScoresIndexes[i]]) {
        frequency[maxScoresIndexes[i]]++;
      } else {
        frequency[maxScoresIndexes[i]] = 1;
      }

      if (frequency[maxScoresIndexes[i]] > maxCount) {
        maxCount = frequency[maxScoresIndexes[i]];
        mostFrequent = maxScoresIndexes[i];
      }
    }

    return mostFrequent;
  }

  const returnSquadScores = (data) => {
    let totalPerSquad = [];
    // after adding squadMembers scores per squad in the below scope, we push the squadName using key and totalSquadScore as the total to the totalPerSquad array.
    for (const [key, value] of Object.entries(data)) {
      // loop 1 - squads

      let totalSquadScore = 0;
      value.map((item) => {
        // loop 2 squadMembers
        // Here we are looping over squadMember scores and adding them up while keeping track on scope up in variable called totalSquadScore.
        totalSquadScore += item.score.reduce(
          (firstItem, secondItem) => firstItem + secondItem
        );
      });
      totalPerSquad.push({
        squadName: key,
        total: totalSquadScore
      });
    }
    console.log("totalPerSquad:", totalPerSquad);
  };

  const topPlayerPerSquad = (data) => {
    for (const [key, value] of Object.entries(data)) {
      // console.log("key", key, "value:", value); // returns each squad name for KEY and an array with each squad members as value
      let highScores = [];
      const squad = value.map((squadMember) => {
        const sortedScores = squadMember.score.reduce((a, b) => a + b);
        return {
          member: squadMember.name,
          score: squadMember.score.reduce((a, b) => a + b)
        };
      });

      const sortedSquads = squad.sort();
      console.log("sortedSquads:", sortedSquads);
      return sortedSquads;
    }
  };

  topPlayerPerSquad(squadsData);
  return <></>;
}

/* TO DO
1. I need to add up player scores (loop over squads, loop over players, reduce their scores and return them back to squads with a variable)
2. Sort te players
3. return the top player per team
4. return that in an array, with  a team object and top player name and score as object

*/
