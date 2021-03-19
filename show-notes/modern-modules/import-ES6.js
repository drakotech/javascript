/* Basic Guide to Importing and Exporting Code in JavaScript
   with ES6 Syntax

  
   Basic syntax to import code from another .js file in the 
   same directory is that in the file you want to export the
   functions or variables that will be used elsewhere in the 
   application like so:

     export const greeting = "Hi there";
  
   To then call that variable you will need to:

     import { greeting } from './helper';

   The syntax ./ is used when the imported file is in the same
   directory.
    
*/