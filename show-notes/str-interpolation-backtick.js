// Guide to Backtick string interpolation in Javascript


const lyrics = 'Never gonna give you up';

console.log(`I'm ${lyrics}`);
console.log(`I'm ${2 + 2}`);
console.log(`I'm ${lyrics + " " + lyrics}`);

// Coding excercise:

/* 
Inside the below function, write a variable and give it a
string that says "It's a trap!" Then on the return use string
interpolation to finish the movie line 
*/


function movieLine() {
    // Set your variable here
    let msg = "It's a trap!";
    return (`I was strolling along when I noticed its quiet... too quiet!  ${msg}`)
}

/*

Backticks are the modern method for string interpolation in 
javascript.

*/
