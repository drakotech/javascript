/* What is Babel?


Inside the root directory of our application we have this
.babelrc file that contains only 7 lines of code where we
have some presets and then we have an empty array of
plugins.

Whenever you see a . infront of a file name, that is
typically going to bee a hidden file. So you may even not
see this in your file system. This is considered a hidden
configuration file. That means that whenever you see a file
like that it usually means that the file is security related
or it only deals with some kind of items that you wouldn't
want everyone else to see.

Whenever you see rc the last couple of letters in the file
name, that is almost always a configuration file. There is
only one in this project but as you go on your development
journey, you will see quite a few files that end in rc.
And that just means they are configuration files.

So what that filename is telling us is that this is a 
hidden configuration file for Babel.

What is babel? Babel is a JavaScript compiler. There are
many different kinds of versions of JavaScript.
JavaScript has been around for decades and so because of
that there can be times where you have a browser or some
type of application that doesn't understand all the 
different versions of JavaScript. The versions of
JavaScript are continually being updated. And so you 
don't want to be in a situation where you write code
thinking that the user's going to be accessing a browser
that can understand it, only to find out that it doesn't
understand your code at all and your application doesn't
even work.

So what babel does is it takes all of the code we write
and it compiles it down into something that any browser
is able to understand.

It is called a compiler because it is compiling our
JavaScript code into something that all the browser out
there can work with.

So in essense what the presets are specifying is how we
want babel to work and how to break down the code for
all browsers to understand.

Babel Repl: https://babeljs.io/en/repl.html
*/