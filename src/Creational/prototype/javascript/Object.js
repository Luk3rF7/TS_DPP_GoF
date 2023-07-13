const PersonJs = {
  fistName: 'Lucas',
  lastName: 'Felipe ',
  age: 29,

  fullName() {
    return `${this.fistName} ${this.lastName}`;
  },
};
const anotherPersonJs = Object.create(PersonJs);
anotherPersonJs.fistName = 'shadow';
console.log(anotherPersonJs.fistName);
console.log(anotherPersonJs.fullName());
