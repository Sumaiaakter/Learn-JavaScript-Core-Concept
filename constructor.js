function Person(name, age, prof) { //constructor function
    this.firstName = name,
        this.lastName='akter',
        this.age = age,
        this.prof = prof,
        this.details= function() {
            return this.firstName + " " + this.lastName;
            }
};

const fullDetails = new Person('sumaia', 30, 'web developer');

fullDetails.country = 'banladesh';
// console.log(fullDetails);
// console.log(fullDetails.details());

const name1 = {name:'w3school'};
let letter = '';
for (let x in name1) {
    letter+=name1[x];
}
console.log(letter)