// Guide to Adding and Removing Array Elements in JavaScript


var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']


/*
Notes:

Pop removes the last element in an array and returns it.

Push adds an element in the last position of an array.

Shift removes from the first position in an array and returns
it.

Unshift adds to the first position in an array.

*/

