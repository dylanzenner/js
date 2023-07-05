let chosenMaxLife = 100;
const attackValue = 10;
let monsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
const monsterAttackValue = 15;
const strongAttackVal = 17;
const healval = 20;

adjustHealthBars(chosenMaxLife);
function endRound() {
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  if (monsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("Monster defeated!");
  } else if (currentPlayerHealth <= 0 && monsterHealth > 0) {
    alert("You lose");
  } else if (currentPlayerHealth <= 0 && monsterHealth <= 0) {
    alert("DRAW!");
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = attackValue;
  } else {
    maxDamage = strongAttackVal;
  }
  const damage = dealMonsterDamage(maxDamage);
  monsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackHandler("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG");
}

function healHandler() {
  increasePlayerHealth(healval);
  if (currentPlayerHealth + healval >= chosenMaxLife){
    currentPlayerHealth = chosenMaxLife
  } else {
    currentPlayerHealth += healval
  }
  endRound();
}
strongAttackBtn.addEventListener("click", strongAttackHandler);
attackBtn.addEventListener("click", attackHandler);
healBtn.addEventListener("click", healHandler);
