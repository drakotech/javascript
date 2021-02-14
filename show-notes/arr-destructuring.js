// How to Implement Array Destructuring in JavaScript


const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
]
  
const [posts, repos, profile] = apiList;

console.log(posts);
//https://api.dailysmarty.com/posts
console.log(repos);
//https://api.github.com/users/jordanhudgens/repos
console.log(profile);
//https://api.github.com/users/jordanhudgens

/*
Notes:

this is how you can leverage array destructuring for being 
able to access each one of the elements in an array and then
assign it to a variable.


Coding Exercise:

Assign Kiwi, Iced Coffee, and Roses to their respective titles.
Copy and paste their names to ensure the test will not fail 
because of a spelling error.

Solution:
//Create and name your array list here 
const shoppingList = ['Iced Coffee', 'Roses', 'Kiwi'];

const [beverage, plant, fruit] = shoppingList; //insert your 
variable name here
*/

