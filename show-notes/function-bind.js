// Guide to JavaScript Bind Function


const userOne = {
    firstName: "Kristine",
    lastName: "Hudgens"
};
  
const userTwo = {
    firstName: "Tiffany",
    lastName: "Hudgens"
};
  
// Function expression
const fullName = function() {
  return `${this.lastName}, ${this.firstName}`;
};
  
// Nope!
// const fullName = () => {
//   return `${this.lastName}, ${this.firstName}`;
// };
  
const kristine = fullName.bind(userOne);
const tiffany = fullName.bind(userTwo);
  
kristine();
// Hudgens, Kristine
tiffany();
// Hudgens, Tiffany


/*
Notes: 

When using the bind function you will find that you
can't use arrow functions because it would return
undefined. An arrow function changes how this works.
When using bind you need to use a function expression.

The arrow function will only access the top level scope
and you need to access everything inside.

*/