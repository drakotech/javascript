// Introduction to Arrow Functions in JavaScript


// Same function written as function declaration
function fullName (fName, lName) { 
    console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression
fullName = (fName, lName) => { 
    console.log(`${lName}, ${fName}`);
}
fullName('Kristine', 'Hudgens');

// Basic arrow function
helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with shorthand function argument for single arguments
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow function with multiple arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');


/* 
Notes:

If you are only passing one argument into the arrow function
only the argument name is required no need for brackets. If 
more than one argument is needed the bracket syntax is required.

An arrow function is just another way of defining a function it's
another way of setting up some process that you want to wrap up 
you want to encapsulate and then you want to call it later which
is at its most base case it is exactly what a function is.

It's simply a little bit more of a clean way of doing it.

When you do want to use an arrow function and when you may not
want to use it at all is based on how it works inside of other
functions or even classes. 


Coding excersise

Use a function expression called userInfo with three arguments
for city, state, and zip. It must return Lehi, UT 84043.

Source:
userInfo = (city, state, zip) => { 
    return `${city}, ${state} ${zip}`;
}
userInfo('Lehi', 'UT', '84043');

*/