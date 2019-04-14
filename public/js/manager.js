import { randomDiceRoll } from './randomDiceRoll.js'

export function baseSteal() {
      let dice = [];
      for (let i = 1; i <= 2 ; i++){
          dice.push(randomDiceRoll());
      }
      console.log(`Steal Attempt! [${dice}]`);
      console.log("You rolled: ", dice.reduce((a,b) => a + b));
}

export function pickOff() {
  let dice;
  dice = randomDiceRoll();
  console.log(`Pick Off Attempt! [${dice}]`);
  console.log("You rolled: ", dice);
}

export function hitAndRun() {
  let dice;
  dice = randomDiceRoll();
  console.log(dice);
  if (dice === 1) {
    console.log("Strike!  Runners must advance.");
  } else if (dice < 4) {
    console.log("Foul Ball! Runners must return to base.");
  } else {
    console.log("Hit!");
  }
}
