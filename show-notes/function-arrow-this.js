// How Arrow Functions Work with ‘this’


function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subTotal = subTotal;
  
    this.total = setInterval(() => {
      console.log((this.taxRate * this.subTotal) + this.subTotal);
      // console.log(this);
    }, 2000);
}
  
const inv = new Invoice(200);
inv.total();

/*
Notes:

Arrow functions are important because they access the parent
scope when working with 'this'. When using a function 
declaration instead of an arrow function 'this' will refer to
the entire scope of an object that it has inside not just the
parent scope that we created.


Coding excersise:

This code snippet represents an unfinished savings calculator.
Your goal is to calculate 30 percent of this month's paycheck,
totaled at $2000. Pass the paycheck amount in the correct spot
and instantiate the object in order to return the correct 
deposit amount.

Solution:
function SavingCalc(paycheck) {
  this.percent = 0.30;
  this.paycheck = paycheck;

  this.deposit = () => {
    return (this.percent * this.paycheck)
  }
}

const piggyBank = new SavingCalc(2000);
piggyBank.deposit();


*/