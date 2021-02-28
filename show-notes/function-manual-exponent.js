// Build a Manual Exponent Function in JavaScript


const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return items.reduce(reducer);
};
  
console.log(toThePowerOf(2, 3)); //8
console.log(toThePowerOf(3, 3)); //27
console.log(toThePowerOf(4, 2)); //8
console.log(toThePowerOf(10, 10)); //10000000000
console.log(10 ** 10); //10000000000
