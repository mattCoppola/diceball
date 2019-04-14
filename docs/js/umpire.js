
// umpire checks for balls and strikes and will call accordingly
export function umpire(balls, strikes, OUTS) {
    if (balls === 4) {
        console.log("Walk!");
    }
    if (strikes === 3) {
        console.log("You're Out!");
        OUTS++;
    }

    console.log("Umpire says total Outs: ", OUTS);

    return OUTS;
}

// umpire provides pitch count
export function pitchCount(balls, strikes, OUTS, inning) {
    let html = '';
    html += `<li>Balls: ${balls}</li>`;
    html += `<li>Strikes: ${strikes}</li>`;
    html += `<li>Outs: ${OUTS}</li>`;
    if(!Number.isInteger(inning)) {
        html += `<li>Top of inning ${inning + .5}</li>`;
    } else {
        html += `<li>Bottom of inning ${inning}</li>`;
    }
    $('.pitch-count').html(html);
}

export function addOut(OUTS) {
  console.log("out added");
  OUTS++;
  return {
    outs: OUTS
  };
}

export function subtractOut(OUTS) {
  console.log("out subtracted");
  OUTS--;
  return {
    outs: OUTS
  };
}

export function addInning(inning) {
  console.log("adding inning");
  inning+= .5;
  return inning;
}

export function subtractInning(inning){
  console.log("subtracting inning");
  inning-= .5;
  return inning;
}
