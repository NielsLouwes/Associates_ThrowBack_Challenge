import { squadsData } from "./squads";
import { themes } from "./themes";
import { AppUtils } from "./App.utils";

export default function App() {
  // Below function gives us people who did at least 1 challenge vs. 0 challenges
  const getParticipationNumbers = (data) => {
    let numPeopleWith0Scores = 0;
    let numPeopleWithAtLeast1Score = 0;

    for (const squad of Object.values(data)) {
      squad.forEach((member) => {
        let totalScore = member.score.reduce((a, b) => a + b);

        if (totalScore === 0) {
          numPeopleWith0Scores += 1;
        } else {
          numPeopleWithAtLeast1Score += 1;
        }
      });
    }

    return {
      membersWithAtLeastOne: numPeopleWithAtLeast1Score,
      membersWithNoScore: numPeopleWith0Scores
    };
  };

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

  console.log(FindMostParticipatedChallenge(squadsData));
  // console.log(getParticipationNumbers(squadsData));

  return <></>;
}

/* 
1. Go into each squad
2. Pick the highest score from each squad member
3. Return the index of the highest scoring challenge
4. Put those indexes in an array
5. return the most occuring index
6. match that with the name of the challenge , its index from the other file
*/
