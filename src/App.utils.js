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

export const AppUtils = {
  findTopThreeOverall
};
