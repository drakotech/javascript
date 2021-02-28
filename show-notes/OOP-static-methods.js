// Guide to OOP Static Methods in JavaScript


class Instructor {
    constructor({ name, role = "assistant" }) {
      this.role = role;
      this.name = name;
    }
  
    // Instance method
    renderDetails() {
      console.log(`${this.name} - ${this.role}`);
    }
  
    // Base case static method
    static helloWorld() {
      console.log('Hi there');
    }
  
    // Static method
    static canTeach(instructor) {
      return (instructor.role === 'classroom');
    }
}
  
let juniorInstructor = new Instructor({ 'name' : 'Brian' });
let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
  
juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"

Instructor.helloWorld(); // "Hi there"
  
// "Brian can teach: false"
console.log(
  `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);
  
// "Alice can teach: true"
console.log(
  `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);


/*
Coding Exercise:

Now you're in the market for a new home and need to compare
some things first. Instantiate an object called choice1 and set
the type to "house". It must return true. Instantiate another
object called choice2 and the type must be set to "apartment"
and that must return false.

class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}

//Write your code here


Solution:

class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}

//Write your code here
const choice1 = new Home({'type': 'house', 'payment': 'mortgage'})
const choice2 = new Home({'type': 'apartment'})

*/