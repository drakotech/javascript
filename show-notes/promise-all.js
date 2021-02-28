// How to Group Promises Together with Promise.all in
// JavaScript


const greeting = new Promise((resolve, reject) =>{
    resolve('Hi there');
    reject('Oops, bad greeting');
  });
  
const updateAccount = new Promise((resolve, reject) => {
  resolve('Updating last login...');
  reject('Error updating account with login.');
});
  
const loginActivities = Promise.all([greeting, updateAccount]);
  
loginActivities.then(res => {
  res.forEach(activity => {
    console.log(activity);
  })
})
//Hi there
//Updating last login...


/*
Notes:

Promise.all() returns a promise itself with multiple promises
inside of it.

This is a way to group promises together to make your code
more efficient and easier to read.

*/