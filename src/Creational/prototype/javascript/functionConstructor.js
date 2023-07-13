function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const personConstructor = {
  firstName: 'Lucas',
  lastName: 'Felipe',
  age: 29,

  fullName() {
    return `${this.firstName}${this.lastName}`;
  },
};
Person.prototype = Object.create(personConstructor);
Person.prototype.constructor = Person;
const person1 = new Person('Felipe', 'Dev', 29);
console.log(person1);
