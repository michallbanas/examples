'use strict';

const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}

const michal = new Person('Michal', 1990);
const simona = new Person('Simona', 1970);
const vlasta = new Person('Vlasta', 1934);

Person.prototype.getAge = function (){
    console.log(2022 - this.birthYear);
}

vlasta.getAge();

console.log(michal.__proto__);

const randomNames = ['Michal', 'Simona', 'Vlasta', 'Lydia', 'Pavol', 'Simona', 'Lydia'];

Array.prototype.unique = function () {
    return [...new Set(this)];
}

Array.prototype.filterByChar = function () {
    return this.filter(name => name.charAt(0) === 'S');
} 

console.log(randomNames.unique());
console.log(randomNames.unique().filterByChar());

const Car = function (brand, speed) {
    this.brand = brand;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.brand} is going ${this.speed}`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.brand} is going ${this.speed}`);
}

const bmw = new Car('BMW', 120);

bmw.accelerate();
bmw.accelerate();
bmw.brake();