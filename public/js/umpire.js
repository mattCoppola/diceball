
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
