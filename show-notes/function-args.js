// How to Work with Function Arguments in JavaScript


function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));
//HUDGENS, JORDAN - Spanish