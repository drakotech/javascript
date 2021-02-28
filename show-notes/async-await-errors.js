// Implementing Error Handling In a JavaScript Async / Await
// Function


async function queryApis() {
    try {
      const postsPromise = fetch('http://api.dailysmarty.com/posts');
      const posts = await postsPromise.then(res => res.json());
      console.log(posts);
    } catch(err) {
      console.log(err);
      console.log('There was an error with the DailySmarty API');
    }
  
    try {
      const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
      const repos = await reposPromise.then(res => res.json());
      console.log(repos);
    } catch(err) {
      console.log(err);
      console.log('There was an error with the GitHub API');
    }
}

queryApis();
//TypeError: Failed to fetch
//There was an error with the DailySmarty API


/*
Notes:

The above code throws an error due to line 7 not having a https
protocol for security. When added is will return the posts and 
repos.

In this kind of situation where we're contacting two different
API's then if the first one fails we may still want this one to
process and so that's when you would wrap it up like this. It's
a couple different ways that you can do that and this is kind
of an industry standard way for catching errors when you're
working with an async and await type of promise situation.

*/