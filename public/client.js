let OUTS = 0;
let baseHit = false;

function pitcher() {
    let strikes = 0;
    let balls = 0;
    let pitch;

    while (strikes != 3 && balls != 4) {
        if (OUTS === 3) {break;}
        pitch = diceRoll();
        console.log(pitch);
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
        baseHit = false;
        hit();
    } else if (OUTS === 3) {
        console.log("Inning Over");
    } else {
        console.log("Balls: ", balls + " Strikes: ", strikes);
        umpire(balls, strikes);
        pitcher();
    }
}

function diceRoll() {
    let count = 0;
    let roll = 0
    // added a count as it seems 6 is rolled too frequently.  This makes count 6 have to be rolled twice before counting as a true roll.
    while (count != 2) {
        roll = Math.floor(Math.random() * 6) + 1;
        if (roll === 6) {
            count++;
            console.log("Count: ", count);
        } else {
            return roll;
        }
    }

    return roll;
}

function umpire(balls, strikes) {
    if (balls === 4) {
        console.log("Walk!");
    }
    if (strikes === 3) {
        console.log("You're Out!");
        OUTS++;
    }
    console.log("Umpire says total Outs: ", OUTS);
}

function hit() {
    console.log("Run the bases!");
    let count = 0;
    for (let i = 0; i <= 5; i++){
        count += diceRoll()
    }
    console.log("You rolled: ", count);
}

pitcher();
