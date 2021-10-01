/* Overview of the Static Directory in a React Application


assets directory
 
 Contains a helpful README.md file that says what you can
 use the assets folder for, this is where you can put your
 static images and other standalone types of code libraries.

 Very rarely I will place any other types of libraries here,
 I will place some static images here like a company logo
 and then you can call them from the application.

 Something like a profile picture or company logo, something
 that doesn't need to change. This isn't the place where you
 would have a user upload files. Instead this is just some
 place where you might have your logo or something like
 that.


favicon.ico

 This is the icon that is shown on the top of the browser
 page that contains the application logo. Here you will
 get the default icon but later on in the course I'm going
 to show you how you can have a custom one that could fit
 your logo or it could be your initials or anything like
 that.


index.html

 This is a critical part of understanding React. We 
 already know how to build a static html site with a 
 regular html document and in that document you have things
 like a document type, and beginning and closing tags,
 meta tags and all kinds of things like that.

 That is really all a React application is or I should say
 that is the entry point for it.

 Whenever someone is going and accessing your application,
 they're going to start by going to and accessing this html
 file. They aren't going to realize it because React is
 great at being able to capture the user coming in. So when
 they come in, they are only given a little empty div. Then
 what React is going to intercept it and then it starts to
 just dynamically slide in the data right here.

 This is how the user is able to see all of the content.
 That's how they can access forms, pages, anything like 
 that.

 As opposed to a static website, years ago the way that we
 would build an application is we would have an index.html
 file, that's the homepage. Then we'd have a about.html
 file for the about us page. Then a contact.html page. So
 you'd have all of these documents and then you'd have to
 link all of these pages.

 Now what React does, is you technically just have a single
 page or a single document. And then React does the work.

 This also goes for other JavaScript applications like Vue
 or Angular or any of the other frameworks. They take in
 this single document, and they simply leverage JavaScript
 to slide in and out any of the data styles, componenets,
 anything like that.

 That makes it kind of nice because you only have this
 single HTML file to deal with.

 In the head section this is where you can place custom 
 fonts. Metadata, Title and all of those kinds of things.
*/