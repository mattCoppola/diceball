import { randomDiceRoll } from './randomDiceRoll.js'

// runner rolls die for strength of run towards a base
export function runner() {
  let die = randomDiceRoll();
  console.log("Runner rolls a ", die);
}
