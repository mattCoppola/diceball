let OUTS = 0;
let baseHit = false;

// runs pitcher function
$('.pitch').on('click', function(e) {
    pitcher();
});

// resets inning after 3 outs
$('.reset-inning').on('click', function(e) {
    console.log("Resetting Outs to Zero")
    OUTS = 0;
});

// dice roll alert - you can probably remove this at some point
$('.dice-roll').on('click', function(e) {
    let roll = diceRoll();
    alert(`You rolled a ${roll}.`);
})

// pitcher function, keeps track of strikes and balls
// will call hit function if a hit occurs
// will call umpire function when strikeout or walk occurs
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
    }
}

// random diceroller function
function diceRoll() {
    let roll = 0
    roll = Math.floor(Math.random() * 6) + 1;

    return roll;
}

// umpire checks for balls and strikes and will call accordingly
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

// hit function carries out a hit and let's batter know the power of the hit
function hit() {
    let count = 0;
    let dice = diceRoll();
    console.log("Roll Die to determine strength of hit");
    console.log(`Nice Hit!  Roll ${dice} dice`);
    for (let i = 1; i <= dice ; i++){
        count += diceRoll();
    }
    console.log("You rolled: ", count);
}
