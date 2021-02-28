// Using a fetch Promise to Communicate with APIs in JavaScript


console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');

postsPromise
  .then(data => data.json())
  .then(data => {
      data.posts.forEach((item) => {
          console.log(item.title);
          //returns all the titles
          console.log(item.url_for_post);
          //returns all links
          
      });
  })
  .catch((err) => {
      console.log(err);
      //TypeError: Failed to fetch
  })

// Using 'Promise' in the variable name lets you know that this
// fetch will return a promise.
