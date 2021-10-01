/* Adding, Removing, and Managing Node Modules in a React
Project


The Node Module directory is really a temporary directory
that contains all the dependancies for the application to
work. You don't want it to be added into the git repository
because these dependancies would need to be installed 
wherever the server is running. You can delete the
directory and reinstall the full list of dependancies
simply by running:
  NPM install


Adding a Node Module

There are two ways of adding new modules.

Manual method:

You can add a node module by opening the package.json file
and adding the name of the library to install in
alphabetical order as best practice along with the exact
version. For this example we installed the moment library
as follows:
  "moment": "2.29.1",

Hitting save here on the file does not add it to your 
node_modules directory. You will need to run:
  npm install

  //added 1 package from 6 contributors in 6.768s

This will then install the library by looking in the
package.json file and compare the list of dependencies 
and if it finds any discrepancies it will install and add
it to the system.

Important note: Visual Studio Code will not auto refresh
the list of dependancies in the node_modules directory.
Make sure to hit refresh!

To use the library in your application you will need to
import the library with:
  import moment from "moment"

Then to test it we added:
  moment().format('MMMM Do YYYY, h:mm:ss a')
in its own div.


Removing a library:

Open the package.json file and remove the lines of code
containing the libraries you don't need. Afterwards run
  npm install

  removed 3 packages and audited 13591 packages in 9.582s

And the libraries will be removed from the system.

You should never have to make any changes directly to the
node_modules directory. Doing so will only make the 
changes take effect on your system but not in deployment.

The node_module directory is critical for our system to
work but those files should not be considered something
you should change or can't access.


Automatic Method:

To add the moment library to the system you can run:
  npm i moment

  + moment@2.29.1
  added 1 package from 6 contributors in 8.972s

This is the preferred method of adding dependencies.
because it will automatically pull the latest version
of the library and also include it in the correct
location in your package.json file.
*/