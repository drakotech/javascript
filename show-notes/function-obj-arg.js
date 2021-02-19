// How to Pass JavaScript Objects as Function Arguments by
//Leveraging Deconstruction


const user = {
    name: 'Kristine',
    email: 'kristine@devcamp.com'
}

const renderUser = ({ name, email }) => {
    console.log(`${name}: ${email}`);
}

renderUser(user);
//Kristine: kristine@devcamp.com


/*
Notes:

It is possible to pass an object as function arguments.
The above syntax is how this would be made possible.

Only catch is that the object keys and the arguments need
to have the same exact name or this method will not work.


Coding Exercise:

You need to check on your bank info but can't get the 
information to show up. Find the missing code and the one
syntax error so the test can pass!

const bank = {
  accountNum: 454812259,
  name: 'John Doe',
  balance: 1257
}

const bankInfo = ({accounNum,}) => {
  return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
}

bankInfo(bank);


Solution: 

const bank = {
  accountNum: 454812259,
  name: 'John Doe',
  balance: 1257
}

const bankInfo = ({ accountNum, balance, name }) => {
  return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
}

bankInfo(bank);

*/