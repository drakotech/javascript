/* Analyzing the src Directory in a React Application


src = source

actions directory

 Inside this directory is an index.js file, this gives us 
 the  ability to interact with our Redux store.

 Redux gives us the ability to store all of our data in a
 single place.

 This is similar to the reducers directory, actions and
 reducers are both specifically made for working with
 Redux.


components directory

 This directory is a very key element of our entire
 application.
 
 Components are what make up a React application. A
 React application is made up of the Component-Based
 Architecture. With that we have the ability to make an
 application one piece at a time. 
 
 Instead of creating all of these pages as was with the
 older method of creating applications, with systems
 like React or Vue that are component based that has a
 lot of components put together and composed together
 and that is what gives us the full application.
 
 Some examples of components would be like a component
 for a little alert on one page, or a component that is
 just a button. They are all going to have their own
 rules and thats because it makes it easier to create
 one component or element or one piece of functionality
 one piece at a time on the page and then share it
 across the entire application.
 
 All of the component based logic is stored inside of 
 this components directory.
 
 Currently in our react portfolio project's components
 directory we have a template app.js file that contains
 a single component called the app component. This is a
 critical component because all of the other components
 are going to be nested inside of this App component.
 
 This app.js file is technically called the Parent
 Component for all of the other components that we have.
 So if we have a portfolio list page or home page or
 form or blog or sign in page, all of those are going
 to be nested inside the app component as child
 components.
 
 Inside we have a render() function that is an item
 that is built into React that allow us to render items
 on the page.


reducers directory
  
 Like the actions directory inside here you will find
 what gives us the ability to work with Redux.


style directory

 The style directory is where we are going to put our 
 scass and css styles. The look and feel of our
 application is going to be stored right inside of this
 directory.

 React is incredibly flexible when it comes to styles.
 You have the ability to implement styles by placing
 them inside of css files. This is the way Jordan
 Hudgens likes to do it but you can also actually 
 create entire styled components, thats one way of
 doing it. Jordan preffers the style directory method
 because you can store all the files in one place
 which makes it easier to access and maintain.

 In this course we are going to make about over a dozen
 dedicated scss files where you will see how we can
 import and call them.


bootstrap.js file

 React applications are very flexible in the way that
 you can build them. This is the reason that React is
 not technically considered a framework, more a JavaScript
 library that allows you to build applications, to render
 items on the page, to manage reactive state.

 Because of that what we have with this file system might
 be very different than another React application that
 you'd work with because React lets you do anything you
 want.

 So if you use a different app at a job after you finish
 this course/Bootcamp and you see the code for the app 
 that you are working on and you don't see a bootstrap.js
 file or a vendor.js file that is perfectly fine. There
 are many ways to implement the React structure. 

 What we have here with this bootstrap.js file is that 
 we are using it for is to make this the start of the
 application. This is somewhat like the entry point
 for everything that we are going to be building out.

 If you look at the file we can see that we import React,
 we have our other Redux imports, we have our router
 import and our app component is also imported here.
 Some things that we will cover later related to Redux
 what you may be able to tell right now is that Redux
 is a pretty big system. That is why there are a lot of
 configuration items related to it.

 Then we will import our main.scss file. This gives us
 the ability to have a single entry point for all of our
 styles. The main.scss file is only there to import the
 other scss files and this method makes the code a lot
 easier to read.

 Then we have our main() function where we are starting up
 the React application.

 We are saying here that we want to use the ReactDOM to
 be rendered in the browser not on a smart phone. The DOM
 is used here because if we were to build a React native 
 mobile application, you wouldn't be using the ReactDOM 
 you would use a React native library.

 ReactDOM gives us the ability to build a web application
 that is going to be rendered in the browser.

 Inside this function we have some items that will be
 covered later. A Provider that's related to Redux. The
 BrowserRouter that gives us the ability to create custom
 routes for our application. Then we are importing our App.

 The syntax used here has to do with JSX, that we will get
 more into later. It gives us the ability to write code
 that looks like HTML that React is able to take that, wrap
 it up treat it like JavaScript and then render content on 
 the page.

 Then have two document lookups. The first is a Query
 Selector and an Add Event Listener. These are just pure
 JavaScript, they are not related to React at all. They give
 us one point where we can point to the HTML file as our
 entry point and this is how we slide in all of our React
 Application.

 The querySelector is looking for a class of app-wrapper
 that is a simple pure vanilla JavaScript selector and I
 want you to slide all of this React JavaScript code right
 inside of that div.

 This single entry point is common among react applications
 and this file is located inside of the static directory
 index.html. This is just a plain html file that contans a
 div with the app-wrapper class.

 The way that React works is that it loads up this 
 bootstrap.js file, it calls ReactDOM, loads in all those
 libraries then it looks for a class called app-wrapper
 then it attaches our files all our componenets directly
 into this html file.

 Technically the entire application is in a single page.

 This can seem strange because you can have some React
 applications that are gigantic like Facebook that has
 a million lines of code. Technically though, it is still
 one file.

 Whenever you have one of these single page appications,
 this is the way they work. They give an entry point and
 then they dynamically slide in and out the JavaScript code.

 Thats what the querySelector does is allows for that 
 entry point for the JavaScript code to go in and out.

 The document.addEventListener is giving us the ability to
 see when the page has loaded and then it injects the main
 function here.


vendor.js
 
 This file provides us with polyfills and how it does that
 is it fills in anything that a browser's missing. As great
 as browsers are like Chrome, Safari, and all of the modern
 browsers out there, they still only interpret only a
 percentage of modern JavaScript code. What a Babel polyfill
 does is it looks at the browser, then it takes the
 JavaScript code and then it converts it. So that even our
 modern syntax that usually a browser wouldn't be able to
 recognize, it converts it into something the browser can.

 This is the reason why we are able to write in a syntax like
 we do and we don't have to write this entire application
 using pure vanilla JavaScript.

In review that is a full analysis of the files and the code
inside of the src directory.

*/