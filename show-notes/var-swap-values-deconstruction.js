// How to Swap Variable Values in JavaScript with Variable
// Deconstruction


let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);
/*
Player One: Kristine
Player Two: Tiffany
*/

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);
/*
Player One: Tiffany
Player Two: Kristine
*/


/*
Notes:

The temp variable method is the outdated method of swapping
variable values in javascript. The new method is using mass
assignment. To get it to work the variables being swapped 
need to use square bracket notation.


Coding Excersise:

Inside the below function, swap the values of right lane
and left lane.

Solution:
function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";
    
    //Write your code here to make the cars switch lanes
    [rightLane, leftLane] = [leftLane, rightLane];
    
    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

roadRage();
*/