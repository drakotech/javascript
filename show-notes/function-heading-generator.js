// Build an HTML Heading Generator Function in JavaScript


const headingGenerator = (title, typeOfHeading) => {
    return `
      <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
}
headingGenerator('Greetings', 1);
//<h1>Greetings</h1>

/*
Notes:

This function will generate an html header when supplied with 
a title and number of heading type as arguments.

*/