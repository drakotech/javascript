// How to Use the Splice Function in JavaScript to 
// Remove Specific Array Elements


var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

arr; // ["Altuve"]

