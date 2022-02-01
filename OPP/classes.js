'use strict';

class Person{
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    getAge() {
        console.log(`${this.fullName} is ${2022 - this.birthYear} years old`);
    }

    // Set a property that already exists
    set fullName(name) {
        name.includes(' ') ? this._fullName = name 
        : console.log('Full name must contain a space');
    }

    get fullName() {
        return this._fullName;
    }
}

class Student extends Person{
    constructor(fullName, birthYear, course) {
        super (fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`Hi, I'm ${this.fullName} and I'm studying ${this.course}`);
    }
}

const ryan = new Student('Ryan Barker', 1990, 'Computer Science');
const trevor = new Person('Trevor Shelt', 1970);

trevor.getAge();
ryan.introduce();

