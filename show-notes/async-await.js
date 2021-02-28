// Introduction to Async and Await in JavaScript


const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User logged in...');
      }, 2000);
    });
}
  
const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities() {
  const returnedLogin = await login();
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount();
  console.log(returnedUpdateAccount);
}

loginActivities();
//User logged in...
//Updating last login...


/*
Notes:

Async is used to set what order your items are going to occur.
If we simply called both of them then the fastest one to
compute would be returned first. In the above example if 
updateAccount returned first it would run into an error.

To create an async function you set it right above your
function declaration. This is going to call our login function
and use await to say that it doesn't want anything to be
completed. Then once its comopleted it will store the data into
returnedLogin.

*/