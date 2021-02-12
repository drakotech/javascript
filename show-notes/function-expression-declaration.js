// Differences Between Function Expressions and Function
// Declarations


var greeting = function () {
    return "Hi there!";
   };
   
   var age = 4;
   
   if (age <= 10) {
     var buildMenu = function () {
       return "Kids' Menu";
     };
   
     function wrongMenuBuilder () {
       return "Wrong Kids' Menu";
     }
   
     console.log(buildMenu());
     //Kids' Menu

     console.log(wrongMenuBuilder());
     //Wrong Kids' Menu
   }

   /*

   Notes:

   There are two ways to build functions in javascript.
   Expression vs Declaration.

   Expression is when the function is anonymous and is 
   stored inside a variable (ln 12). Declared functions are 
   named (ln 16) and should not be placed in blocks. 
   
   Declared functions need to be declared at the top. 
   Expressions can be used in blocks.

   */