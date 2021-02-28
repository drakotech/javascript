// Combining Async / Await with Closures to Ensure All
// Processes Have Run


const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User logged in...');
      }, 4000);
    });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities(login, updateAccount) {
  const returnedLogin = await login;
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount;
  console.log(returnedUpdateAccount);
}

loginActivities(login(), updateAccount());
//User logged in...
//Updating last login...
// Both appeared at the same time after 6 sec.


/*
Notes: 

By leveraging closures you don't have to worry about how long
the functions take because you have control over exactly when
the processes are going to occur, when the details are going
to be returned, and we are able to complete this in a readable
manner.

*/