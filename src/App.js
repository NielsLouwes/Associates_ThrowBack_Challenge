import { squadsData } from "./squads";
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

  console.log(getParticipationNumbers(squadsData));

  return <></>;
}
