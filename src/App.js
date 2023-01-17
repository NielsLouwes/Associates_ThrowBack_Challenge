import { squadsData } from "./squads";
import { AppUtils } from "./App.utils";

export default function App() {
  const topThreeScoresOverall = AppUtils.findTopThreeOverall;
  console.log("Top 3 scores overal:", topThreeScoresOverall(squadsData));

  function FindTopThreeChallenges() {
    for (const [key, value] of Object.entries(data)) {
      const squads = value.map((item) => {
        return {
          squad: key,
          name: item.name,
          score: item.score.reduce((a, b) => a + b)
        };
      });
    }
  }

  return <></>;
}
