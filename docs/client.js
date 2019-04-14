import { randomDiceRoll } from './js/randomDiceRoll.js'
import { umpire, addOut, subtractOut, addInning, subtractInning } from './js/umpire.js'
import { baseSteal, pickOff, hitAndRun } from './js/manager.js'
import { pitch } from './js/pitcher.js'
import { hit } from './js/hitter.js'
import { runner } from './js/runner.js'
import { fielder } from './js/fielder.js'

let STATS = {
    inning: 1,
    outs: 0,
    baseHit: false
}

// runs pitcher function
$('.pitch').on('click', function(e) {
    if (STATS.inning > 9) {
        console.log("Game is Over!!!!!!!");
        // gameStats();
    } else {
        let result = pitch(
            STATS.outs,
            STATS.baseHit,
            STATS.inning
        );
        //
        // console.log(result);
        STATS.outs = result.outs;
        STATS.baseHit = result.baseHit;
        STATS.inning = result.inning;
        // PITCHCOUNT.balls = result.balls;
        // PITCHCOUNT.strikes = result.strikes;
        //
        // gameStats();
        // pitchCount();
    }
});

//executes hitter function
$('.hit').on('click', function(e) {
  console.log("Batter swings!");
  hit();
});

//executes runner function
$('.runner').on('click', function(e) {
  runner();
});

//executes fielder function
$('.fielder').on('click', function(e) {
  fielder();
});


//////////////////////
// UMPIRE FUNCTIONS //
//////////////////////

//adds an Out to the inning
$('.add-out').on('click', function(e) {
  if(STATS.outs >= 3) {
    console.log("Error:  outs = 3.  Outs can't be greater than 3.")
  } else {
    let results = addOut(STATS.outs);
    STATS.outs = results.outs;
    console.log(STATS.outs);
  };
});

//subtracts an Out from the inning
$('.subtract-out').on('click', function(e) {
  if(STATS.outs === 0) {
    console.log("Error: outs = 0.  Outs can't be negative.");
  } else {
    let results = subtractOut(STATS.outs);
    STATS.outs = results.outs;
    console.log(STATS.outs);
  };
});

//adds an Inning to the game
$('.add-inning').on('click', function(e) {
  // eventually you will want to add logic for extra innings
  // for now adding an inning will go infinitely
  let results = addInning(STATS.inning);
  STATS.inning = results
  console.log(STATS.inning);
});

//subtracts an Inning to the game
$('.subtract-inning').on('click', function(e) {
  if(STATS.inning === 1) {
    console.log("Error: Innings can't be less than 1");
  }
  else {
    let results = subtractInning(STATS.inning);
    STATS.inning = results;
    console.log(STATS.inning);
  }
});


// resets inning after 3 outs
$('.reset-inning').on('click', function(e) {
    console.log("Resetting Outs to Zero")
    STATS.outs = 0;
    // gameStats();
});

///////////////////////
// MANAGER FUNCTIONS //
///////////////////////

$('.base-steal').on('click', function(e) {
  baseSteal();
});

$('.pick-off').on('click', function(e) {
  pickOff();
});

$('.hit-and-run').on('click', function(e) {
  hitAndRun();
});

// dice roll alert - you can probably remove this at some point
$('.dice-roll').on('click', function(e) {
    let roll = randomDiceRoll();
    alert(`You rolled a ${roll}.`);
})

// displays current game stats
// function gameStats() {
//     let html = '';
//     html += `<li>Inning: ${STATS.inning}</li>`;
//     html += `<li>Outs:  ${STATS.outs}</li>`;
//
//     $('.stats').html(html);
// }
