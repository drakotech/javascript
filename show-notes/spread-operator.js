// Guide to the JavaScript Spread Operator

// In essence, what the spread operator does is spread
// out each element of a collection into individual elements.


// Combining Arrays
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart); 
//[345, 375, 765, 123, 98, 123]


// Copying Arrays
const copyshoppingCart = [345, 375, 765, 123];
const updatedCart = [...copyshoppingCart];
updatedCart.push(5);
console.log(updatedCart);
//[ 345, 375, 765, 123, 5 ]
console.log(copyshoppingCart);
//[ 345, 375, 765, 123 ]

// Spread Operator as Arguments
const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));
//10

// How it works:
// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3


// Object Deconstruction
const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
//Verlander
console.log(closer);
//Giles
console.log(relievers);
//{ relief_1: 'Morton', relief_2: 'Gregerson' }


/* 
Notes:

Combining Arrays

A regular push will add a single element, whereas the
spread operator '...' spreads them out or expands them
and finds the elements inside the array and adds that.


Copying Arrays

When copying an array be careful not to only create a
reference to the original array with:
newArray = array

What you could use is the .slice() method to create a
copy and store it in a new variable.

By using the spread operator you will be able to gain the
exact same behaviour. 

Both of these versions are going to be seen alot in 
applications. The spread operator is seen more in the 
more modern applications to make copies of data. Slice
is the older method but accomplishes the same task.


Spread Operator as Arguments

The spread operator can also be used when running the
Math.max function to find the highest value in an array
of data. Without it you get returned 'NaN' because the 
function thought it was just passed a single array as an
argument. It expected to be passed multiple arguments.

With the spread operator you can spread out each element
of the array into all the argument spaces.


Object Deconstruction

The spread operator is handy in object deconstruction
because it is one of the most common ways of performing
deconstruction with objects and this is seen a lot in 
applications that utilize React.

This is one of the most common ways that you use function 
arguments when you don't know how many you're dealing with
and you need to be able to extract them and store them
inside of a variable so that you can use those later on.


Coding Exercise:

In the return below, use Math and spread operators to find
the highest number of the 'highscore' array.

function yourTest() {
  const highscore = [237.0198, 256.1, 234.846, 237.21, 256.654];
  
  return ();
}

yourTest();


Solution:

function yourTest() {
  const highscore = [237.0198, 256.1, 234.846, 237.21, 256.654];
  
  return (Math.max(...highscore));
}

yourTest();


*/