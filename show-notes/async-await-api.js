// Using Async / Await for Communicating with Outside APIs
// in JavaScript


async function queryApis() {
    const postsPromise = fetch('https://api.dailysmarty.com/posts');
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);
  
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
}
  
queryApis();
// Returns posts object
// Returned repos array