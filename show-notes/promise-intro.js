// Introduction to JavaScript Promises


let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello....')
    }, 2000);
  
    setTimeout(() => {
      reject(Error('Too sleepy...'))
    }, 2000);
});
  
sleepyGreeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });


/*
Notes:

Promises

Typically when you're building a function or a class you don't
spend a lot of your time having to figure out what happens if
an error occurs. What a promise does, is it forces you to
build the entire system and have a 50/50 split.

Promises are all about building with a 50% split. It's 50% 
work to do if the promise works vs what to do the 50% of the
time it fails.

A promise is expected to either work or it's expected to have
some kind of error or issue.

Promises are popular because of what's called its asynchronous
nature. That means it can perform tasks where you can call
outside services and their API's and you can pick and choose
which elements on your page or in your application will load
right away versus which ones may take a little bit longer.

That's why promises are important to learn because they deal
specifically with the user experience.


Structure

Older conventions have promises built with success, failure
instead of resolve, reject. 

When calling a promise you can call the variable name and
common convention is to put it on multiple lines.

The special keywords 'then' is tied to 'data'. The 'then' is
what calls a code block. 'data' is what gets returned. In 
the above example it would be the 'Hello....' string.

But it could also be a set of JSON post requests or tweets
or whatever you're doing when you're calling this.

'catch' is mapped to reject, just like 'then' is mapped to
resolve and it also has access to the data keyword.


In conclusion

A promise gives us the ability to make outside API calls 
and do any kind of task where we should not have an 
expectation of the task occurring in real time. Such as
making a database query or an outside API call when you
have a system that doesn't require it to happen right away
what we can do is utilize a Promise.

Promises are crucial to Javascript becasuse they are linchpin
to being able to make sure that the process happens as smoothly
as possible.


*/