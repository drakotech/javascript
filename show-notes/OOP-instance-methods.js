// Guide to JavaScript OOP Instance Methods


class Instructor {
    constructor({ name, role = 'assistant' }) {
      this.name = name;
      this.role = role;
    }
  
    renderDetails() {
      console.log(`${this.name}: ${this.role}`);
    }
}
  
const jon = new Instructor({name: 'Jon Snow'});
const brayden = new Instructor({
    name: 'Brayden',
    role: 'teacher'
});
jon.renderDetails();//Jon Snow: assistant
brayden.renderDetails();//Brayden: teacher


/*
Notes:

An instance method is a function inside of a class. And
whenever you create a new instance of that class you can then
call those instance methods on it.

Its very important to instantiate the object and use the
'this' keyword in the function to properly instantiate the
object.



Coding Exercise:

You're in the market for a new car but want it to be electric.
Create an instance of the Car class called model3. The year
must be a number (so don't wrap it in quotation marks). Set
the brand to "Tesla" and change the poweredBy to "electricity".

class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

//Write your code here


Solution:

class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

//Write your code here
const model3 = new Car ({
    year: 2021,
    brand: "Tesla",
    poweredBy: "electricity"
})


*/