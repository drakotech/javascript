// Integrating Conditionals into JavaScript Strings with
// Ternary Operators


const page = 'about';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);

/*

While technically you could use a full if statement in an
interpolated string, it would be very clunky and would take up
multiple lines. The best practice in this case is to use ternary
operators.

Coding Excersise:

In the below functions return, make your string interpolation 
and conditional that returns "1 point", when the ship variable 
is set to "hit" and when the variable is set to anything else 
(aka, a "miss"), have it return "You lost a point".


// Fill in the below code with your requirements

var ship = "hit";

function battleShip() {
  return(`${ship === "hit" ? "1 point" : "You lost a point"}`)
}

*/