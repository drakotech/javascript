/* How to Generate a React Project with the Project Builder
Module


After installing NPM and Node you have all the tools you 
need however in order to build out a full react application
there are a number of different dependancies.

For just starting out setting up your own system we have 
an npm module just for this course called the DevCamp
JavaScript Project Builder.

https://www.npmjs.com/package/devcamp-js-builder

To install in the terminal run:
  npm install devcamp-js-builder -g

You may need to run as sudo incase of permission errors
or a -f flag at the end.

To generate the project you then run:
  js-generate

Here you will see a list of projects to install. 
Currently I am seeing:
? What project template would you like to generate? 
(Use arrow keys)
> es6-starter
  react-bootstrap
  react-redux
  react-redux-router
  react-router
  react-skeleton
  react-typescript

This will generate the project directory and install
the required dependancies.

To get it working you will need to run:
  npm install
  npm start
*/