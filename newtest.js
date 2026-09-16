// class person2
// {
//     constructor(firstName){
//         this.firstName = firstName

//     }
//     print(){
//         return this.firstName
//     }
// }

// let test = new person()
// console.log(test.print())

module.exports = class Person {
    constructor(firstName){
        this.firstName = firstName

    }

    print() {
        console.log(this.firstName)
        return "Nothing"
        // return this.firstName + this.lastName;
    }
}

// let test = new Person("1", "2");
// console.log("Result:", test.print());
// console.log(undefined + undefined);
// module.exports = { person2, Person };