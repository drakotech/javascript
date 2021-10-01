/* Overview of Webpack's Role in React


Webpack is actually a technology that is used to beable to 
package up and utilize various libraries inside your
JavaScript applications.

So Webpack is not specific just to React. It is very comon
to use with React however, it is not something that if 
you're using say Vue or Angular or some of these other
types of frameworks, it can be used with all of those as 
well.

It is one of the most popular JavaScript tool sets out
there.

We will not cover every element of Webpack as it is very 
extensive we will be using it a little as we go through this
course. But Webpack starts getting into some more advanced
topics so we'll cover that type of setup in some of the
future proects that you go through.

For now we will cover on a high level overview what Webpack
does for us.

With our template we have four files that are separate and
have separate roles based on the environment that they're
in.

The common.config.js file is a set of rules that the 
application will follow for every environment. 

The dev.config.js configures rules for when the application
is running on your local machine.

The prod.config.js which is short for production, is going
to be the rules the application follows when its on a 
server.

And the postcss.config.js is just so that it can work with
css files.

At this point we don't have to understand how every part
of these work becauase it doesn't have anything to do with
React, its just a set of setting files. You will not have
to change these very much especially in this application.

common.config.js
 
 As noted by the .js extension, this is just a regular 
 JavaScript file. It's bringing in a single library called
 the SplitChunksPlugin.

 Then it has a set of exports.

 Essentially what we are doing here is putting together a
 list of rules that we want our application to follow.
 Because as great as React is, it wants you to be able to
 customize alot of the tooling. That is why is there in
 the template.

 Alot of developers have wanted to learn React but stopped
 development very early in the educational process because
 they didn't want to have to go through setting up all the
 initial tooling.

 This is why JH created the JS builder NPM library.

 What we have here is those set of rules. JH went through
 and put these together so the application would run
 smoothly.

 When it says module.exports what Webpack is doing is its
 putting together this list.

 What it's first saying in its first entry point is I want
 the application logic to start here. The app itself is
 going to start at the /src/bootstrap.js file first because
 it is going to be the entry point for all of our other
 application logic.

 The other main entry point index.hml file located in the
 static folder isn't actually conflicting with each other
 because this is where the user comes in. But from a 
 programming perspective, the application itself the logic
 is all stored and starts inside of the bootstrap.js file.

 Then we reference the vendor.js file to bring in those
 polyfills that we mentioned.

 Then we have this next rule called resolve. Here we specify
 a whitelist for the types of files that we want to be on
 the inside of our application. We want to allow .js and 
 .scss file extentions here.

 Then for modules we are pointing to the node_modules 
 directory where our list of dependancies are.

 These are all pretty stadard for most applications. No
 changes here are necessary.

 Down below we have another set of rules called Rules for
 Modules.

 Test is where they are testing against certain values so
 the first is where they test to see if they are .js files
 and they are not going to include your node_modules and
 they are going to bring in the babel-loader.

 This will allow the use of modern JavaScript syntax
 by converting it to vanilla JavaScript for the browser
 compatability.

 The next rule has to do with images and uses a different
 loader: file-loader. That allows us to work with all the
 different types of image files.

 Then there is a rule for video files and their extensions.

 Then we have a plugins key and this is where it is simply
 going to chunk the application and use that plugin. All
 that means is Webpack, because of how it works, it tries
 to make your application very good from a performance
 perspective.

 What it tries to do is split your application into chunks
 or pieces and then loads them when they need to be loaded.
 So instead of loading every part of the entire application,
 when say, a user goes to your homepage. It only loads
 what is absolutely necessary. And its very smart about
 doing that. Its part of the main reasons why Webpack has
 become so incredibly popular. And why almost every 
 JavaScript application that we work on will in some form
 or other utilize Webpack.

In review, the key element to take away from this guide
and from Webpack in general, is that Webpack gives you the
ability to work with dependancies to set rules for how your 
aplication is going to run.

It really is a set of configuration options that you can
use. It falls more into the advanced category so we aren't
going to spend a ton of time with it. Buy just so you know
where all those configuration items are located inside of
the Webpack directory.

With all of that in place we will now move on to these final
list of files at the root of our project.


*/