import { randomDiceRoll } from './js/randomDiceRoll.js'
import { umpire } from './js/umpire.js'
import { pitch } from './js/pitcher.js'
import { hit } from './js/hitter.js'

let STATS = {
    inning: 1,
    outs: 0,
    baseHit: false
}

let PITCHCOUNT = {
    balls: 0,
    strikes: 0
}

// runs pitcher function
$('.pitch').on('click', function(e) {
    if (STATS.inning > 9) {
        console.log("Game is Over!!!!!!!");
        gameStats();
    } else {
        let result = pitch(
            STATS.outs,
            STATS.baseHit,
            STATS.inning
        );

        console.log(result);
        STATS.outs = result.outs;
        STATS.baseHit = result.baseHit;
        STATS.inning = result.inning;
        PITCHCOUNT.balls = result.balls;
        PITCHCOUNT.strikes = result.strikes;

        gameStats();
        pitchCount();
    }
});

// resets inning after 3 outs
$('.reset-inning').on('click', function(e) {
    console.log("Resetting Outs to Zero")
    STATS.outs = 0;
});

// dice roll alert - you can probably remove this at some point
$('.dice-roll').on('click', function(e) {
    let roll = randomDiceRoll();
    alert(`You rolled a ${roll}.`);
})

// displays current game stats
function gameStats() {
    let html = '';
    html += `<li>Inning: ${STATS.inning}</li>`;
    html += `<li>Outs:  ${STATS.outs}</li>`;

    $('.stats').html(html);
}

// displays current pitch count
function pitchCount() {
    let html = '';
    html += `<li>Balls: ${PITCHCOUNT.balls}</li>`;
    html += `<li>Strikes: ${PITCHCOUNT.strikes}</li>`;

    $('.pitch-count').html(html);
}

