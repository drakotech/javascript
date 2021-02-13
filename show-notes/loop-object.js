// How to Loop Through a JavaScript Object

  
var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]);
  }


  /*

  Notes: 

  Hash rocket key " => ".

  */
