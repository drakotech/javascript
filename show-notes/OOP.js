// Introduction to Object Oriented Programming in JavaScript


class Instructor {
    constructor({ name }) {
      this.name = name;
    }
}
  
const jon = new Instructor({ name: 'Jon Snow' });
console.log(jon.name);//Jon Snow



/*
Notes:

A constructor is used to build objects by runnning processes.

In the example above it takes in a name and creates an 
instructor with it.

Instantiation occurs on line 10. The class is used to create
an object stored in the const jon variable. jon is called an
instance of instructor.

Whenever you instantiate a new version of instructor you need 
to pass the atttribute into that object. As above, a name 
attribute needs to be passed in.

If you were to console.log(jon) you would have returned the
entire object. Above on line 11 we can treat jon just like
any object and call its name attribute with the .name syntax.



Coding Exercise:

Create a class, named Account, that has properties for a
username and password. Then instantiate a new object called
user and set the username and password to whatever you like.


Solution: 

class Account {
    constructor({ username, password }) {
      this.username = username;
      this.password = password;
    }
}
  
const user = new Account({ 
    username: 'GeorgeFlefel', 
    password: 'pwd' 
});


*/