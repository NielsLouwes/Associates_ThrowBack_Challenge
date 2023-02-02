function findTopThreeOverall(data) {
  let players = [];
  for (const [key, value] of Object.entries(data)) {
    const squads = value.map((item) => {
      return {
        squad: key,
        name: item.name,
        score: item.score.reduce((a, b) => a + b)
      };
    });

    players.push(squads);

    const newArray = players.flat();
    const sortedScores = newArray.sort((a, b) => b.score - a.score).slice(0, 3);
    return sortedScores;
  }
}

// const topThreeScoresOverall = AppUtils.findTopThreeOverall;
// // console.log("Top 3 scores overal:", topThreeScoresOverall(squadsData));

function FindTopThreeChallenges(data) {
  for (const [key, value] of Object.entries(data)) {
    // console.log("VALUE", value); // value is only returning the first object so only first
    // console.log("Keys", key);
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

//BELOW function gives us the score per squad

// const calculateSquadScore = (squad) =>
//   squad.reduce(
//     (total, player) => total + player.score.reduce((a, b) => a + b),
//     0
//   );

// const squadsScore = Object.keys(squadsData).reduce((acc, squad) => {
//   acc[squad] = calculateSquadScore(squadsData[squad]);
//   return acc;
// }, {});

// console.log(squadsScore);

export const AppUtils = {
  findTopThreeOverall
};
