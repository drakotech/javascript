// Remove the First and Last Element from a JavaScript Array


const removeFirstAndLast = arr => {
    if (arr.length >= 3) {
      return arr.slice(1, -1);
    } else {
      throw "You need at least three elements in the array";
    }
  };
  
  removeFirstAndLast([1, 2, 3, 4]); 
  //[ 2, 3 ]
  removeFirstAndLast(["<h1>", "Some content", "</h1>"]); 
  //Some content
  removeFirstAndLast(["Some content", "</h1>"]); 
  //You need at least three elements in the array