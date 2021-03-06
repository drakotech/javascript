// Build a Pretty Price Method in JavaScript


const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
      extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
};

console.log(prettyPrice(2.2, 0.95));
//2.95
console.log(prettyPrice(2.2, 95));
//2.95
console.log(prettyPrice(2.2, 0));
//2
console.log(prettyPrice(2.2, 99));
//2.99

/*
  This Pretty Price method takes 2 arguments, a gross price
  and the extension is what number you would like it to
  reach.

  The if statement is there to correct the second argument
  for when it was passed whole numbers instead of a float 
  value.
*/