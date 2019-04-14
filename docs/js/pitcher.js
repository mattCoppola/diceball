import { randomDiceRoll } from './randomDiceRoll.js'
import { umpire, pitchCount } from './umpire.js'
import { hit } from './hitter.js'

// pitcher function, keeps track of strikes and balls
// will call hit function if a hit occurs
// will call umpire function when strikeout or walk occurs
export function pitch(OUTS, baseHit, inning) {
    let strikes = 0;
    let balls = 0;
    let pitch;

    while (strikes != 3 && balls != 4) {
        if (OUTS === 3) {break;}
        pitch = randomDiceRoll();
        pitchCount(balls, strikes, OUTS, inning);
        // console.log(`Balls: ${balls}, Strikes: ${strikes}`);
        console.log(`Current Pitch: ${pitch}`);
        if (pitch === 6) {
            console.log("It's a hit!");
            baseHit = true;
            break;
        } else if (pitch > 3) {
            balls++;
            console.log("Ball!");
        } else if (pitch > 1 && strikes === 2) {
            console.log("Foul Ball!")
        } else if (pitch > 1) {
            strikes++;
            console.log("Foul Ball!")
        } else {
            strikes++;
            console.log("Strike!")
        }
    }

    if (baseHit === true) {
        console.log("Offense rolls for base runner.");
        let results = umpire(balls, strikes, OUTS);
        OUTS = results;
        baseHit = false;
        // hit();
    } else if (OUTS === 3) {
        console.log("Inning Over");
        inning+= .5;
        OUTS = 0;
    } else {
        pitchCount(balls, strikes, OUTS, inning);
        // console.log("Balls: ", balls + " Strikes: ", strikes);
        let results = umpire(balls, strikes, OUTS);
        OUTS = results;
    }

    return {
        outs: OUTS,
        baseHit: baseHit,
        inning: inning,
        balls: balls,
        strikes: strikes
    }
}
