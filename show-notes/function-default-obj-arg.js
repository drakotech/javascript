// Guide to Adding Default Object Values to JavaScript
// Function Arguments


const blog = {
    title: 'My great post',
    summary: 'Summary of my post'
}

const blogDefault = {
    title: 'My great post',
}
  
const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
    console.log(`
      og-title=${title}
      og-description=${summary}
    `);
}
  
openGraphMetadata(blog);
//og-title=My great post
//og-description=Summary of my post

openGraphMetadata(blogDefault);
//og-title=My great post
//og-description=A DailySmarty Post


/*
Notes:

On line 14 above you can see how we add a default value to the
argument incase this value hasn't been declared.

You can see that the blogDefault object returned the default
value on line 27.


Coding Exercise:

Write an object called user with an attribute for username and
status. You may set the username to whatever string you'd like
but the status must be set to "away". Then, write a function
called loginEvent that changes the users status to "active".
(Instead of a console.log use return). It must return 
"your_username is active"


Solution:

const user = {
    username: 'George',
    status: 'away'
}

const loginEvent = ({ username, status }) => {
    user.status = 'active';
    return `${username} is ${status}`;
}

*/