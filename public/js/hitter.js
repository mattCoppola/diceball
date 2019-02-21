
import { randomDiceRoll } from './randomDiceRoll.js'

// hit function carries out a hit and let's batter know the power of the hit
export function hit() {
    let count = 0;
    let dice = randomDiceRoll();
    console.log("Roll Die to determine strength of hit");
    console.log(`Nice Hit!  Roll ${dice} dice`);
    for (let i = 1; i <= dice ; i++){
        count += randomDiceRoll();
    }
    console.log("You rolled: ", count);
}
