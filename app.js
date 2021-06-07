const dice = document.getElementById("dice");
const roller = document.getElementById("roller");
const btn = document.getElementById("btn");

function randomNumber() {
  const numbers = [1, 2, 3, 4, 5, 6];
  numbers.sort((a, b) => 0.5 - Math.random());
  return numbers[0];
}
function onLoading() {
  roller.src = `img/${randomNumber()}.png`;
}
function rollDice() {
  let rollerSrc = `img/${randomNumber()}.png`;
  const img = document.createElement("img");
  img.src = rollerSrc;
  dice.innerHTML = "";
  dice.append(img);
  img.classList.add("animate__animated", "animate__jackInTheBox");
}

function init() {
  btn.addEventListener("click", rollDice);
  onLoading();
}
init();
