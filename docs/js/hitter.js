
import { randomDiceRoll } from './randomDiceRoll.js'
import {hitLocation} from './gamelogic.js';

// hit function carries out a hit and let's batter know the power of the hit
export function hit() {
    let dice = [];
    let die = randomDiceRoll();
    console.log("Roll Die to determine strength of hit");
    console.log(`Nice Hit!  Roll ${die} dice`);
    for (let i = 1; i <= die ; i++){
        dice.push(randomDiceRoll());
    }
    console.log(dice);
    let diceTotal = dice.reduce((a,b) => a + b);
    let result = hitLocation(diceTotal);
    console.log(`You rolled: ${diceTotal}, which is a ${result}`);
}
