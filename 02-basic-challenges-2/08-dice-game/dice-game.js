function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSimulations) {
  if (typeof numSimulations !== "number") return undefined;
  const results = [];

  for (let i = 0; i < numSimulations; i++) {
    let dice1 = dice();
    let dice2 = dice();
    let sum = dice1 + dice2;
    let result =
      sum === 7 || sum === 11
        ? "win"
        : sum === 2 || sum === 3 || sum === 12
        ? "lose"
        : "roll again";

    results.push({ dice1, dice2, sum, result });
  }

  return results;
}

module.exports = diceGameSimulation;
