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

  console.log(returnSquadScores(squadsData));

  // const getMostParticipations = (data) => {
  //   for (const squad of Object.values(data)) {
  //     squad.forEach((member) => {
  //       let totalScore = member.score.filter((singleScore) => {
  //         let count = 0;
  //         if (singleScore !== 0) {
  //           count++;
  //         }
  //         return count;
  //       });
  //       console.log("totalScore:", totalScore);
  //       return {
  //         squadMember: member.name,
  //         count: count
  //       };
  //     });
  //   }
  // };

  // console.log("participations: ", getMostParticipations(squadsData));
  return <></>;
}

/*  TO DO
1. Go into each squad
2. Count the number of non zero numbers and return per person 
3. data = {
  person: squad.person.name
  participationScore: personCount,
}
4. Put those objects in an array in the upper scope
5. Sort the objects by participation score
6. Return highest participation
*/
