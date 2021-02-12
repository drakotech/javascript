// How Variable Scope Works in JavaScript


var userObj = {
    email: 'sample@example.com',
    fullName: 'Kristine Hudgens'
  }
  
  function dashboardGreeting() {
    var userObj = {
      email: 'sample2@example.com',
      fullName: 'Jordan Hudgens'
    }
    console.log("Hi there, ".concat(userObj.fullName));
  }
  
  dashboardGreeting();
  //Hi there, Jordan Hudgens
  
  console.log(userObj.fullName);
  //Kristine Hudgens