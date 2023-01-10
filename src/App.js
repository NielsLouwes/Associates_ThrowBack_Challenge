const squadsData = require("./squads.json");

export default function App() {
  const squads = Object.keys(squadsData);
  console.log(squads);

  const values = Object.values(squadsData);
  console.log(values);

  const squadOne = values[0][0]; // returns Niels
  console.log(squadOne);

  const names = squads.map((squad) => squad.name);

  return <div className="App">{squads.map((squad) => squad)}</div>;
}
