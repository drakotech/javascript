function ageVerification(age) {
    // if (age > 25) {
    //   console.log('can rent a car');
    // } else {
    //   console.log("can't rent a car");
    // }
  
    return age > 25 ? "can rent a car" : "can't rent a car";
  }
  
  ageVerification(30); //?
  ageVerification(10); //?
  
  function adminControls(user) {
    // if (user) {
    //   if (user.admin) {
    //     return 'showing admin controls...';
    //   } else {
    //     return 'You need to be an admin';
    //   }
    // } else {
    //   return 'You need to be logged in';
    // }
  
    return user
      ? user.admin ? "showing admin controls" : "You need to be an admin"
      : "you need to be logged in";
  }
  
  const userOne = {
    name: "Kristine",
    admin: true
  };
  
  adminControls(userOne); //"showing admin controls"
  
  const userTwo = null;
  
  adminControls(userTwo); //"you need to be logged in"
  
  const userThree = {
    name: "Tiffany",
    admin: false
  };
  
  adminControls(userThree); //"You need to be an admin"

  /*
  Notes:

  A ternary operator is a way to have a conditional expression
  all on one line.

  Syntax is: expression ? block to run if true : block to run if false

  Ternary operators also support nested conditionals as seen above.
  

  */