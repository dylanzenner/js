const randomNumber = Math.random();
const anotherRandomNumber = Math.random();
// produces random number between 0 (including) and 1 (excluding)
if (
  (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
  anotherRandomNumber <= 0.2 ||
  randomNumber <= 0.2
) {
  alert("BIG NUMBER");
}

let numbers = [];
let i = 0;
while (i < 10) {
  numbers.push(i);
  i++;
}
let j = 0;
console.log(numbers);
while (j < numbers.length) {
  console.log(numbers[j]);
  j++;
}
for (let k = 0; k < numbers.length; k++) {
  console.log(numbers[k]);
}
let z = numbers.length;
while (z !== 0) {
  console.log(numbers[z]);
  z--;
}
