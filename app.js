const dice = document.getElementById("dice");
const roller = document.getElementById("roller");

function rollDice() {
  const numbers = [1, 2, 3, 4, 5, 6];
  numbers.sort((a, b) => 0.5 - Math.random());
  roller.src = `img/${numbers[0]}.png`;
}
rollDice();
