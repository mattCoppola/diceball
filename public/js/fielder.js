import { randomDiceRoll } from './randomDiceRoll.js'

// fielder rolls die for strength of throw towards a base
export function fielder() {
  let die = randomDiceRoll();
  console.log("Fielder rolls a ", die);
}
