const Person = require('./newtest')


class Test extends Person
{
    // firstName ="Test"
    // constructor(firstName, lastName) {
    // //     super()
    // firstName ="Test"
    //     // this.firstName = firstName;
    //     // this.lastName = lastName;
    // }
    newprint() {

        return this.firstName + this.lastName;
    }
}

let test = new Test("1", "2");
console.log("Result:", test.print());