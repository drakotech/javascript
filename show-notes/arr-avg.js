const getAverage = arr => {
    // Sum the values from the array
    const reducer = (total, currentValue) => total + currentValue;
    const total = arr.reduce(reducer);

    // Get the length of the array
    // Divide the array total by the length
    return total / arr.length;
  };
  
  const arr = [1, 2, 3, 4, 5, 6];
  
  getAverage(arr);

  /*
  Notes:

  In this excersise we look into how to use the reduce method
  to get the average from an array.

  The reduce method takes in up to 4 arguments. It calls the
  function one time for each element in the array.

  Every time the method is called for each element in the array
  the first argument is where the accumulated result is stored
  and is provided as an argument in the next call to the callback
  function.

  Another interesting thing to note is if you ever find yourself
  staring at a screen trying to figure out what to do next, a
  great practice is to label your steps as line comments, then
  simply fill in the blanks.

  */