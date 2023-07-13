export class Person2 {
  constructor(
    public name?: string,
    public age?: number,
  ) {}
}

// Exemplo de builder:
export class PersonBuilder2 {
  private person = new Person2();
  //reseta
  newPerson(): void {
    this.person = new Person2();
  }
  //metodo chains
  setName(name: string): this {
    this.person.name = name;
    return this;
  }

  setAge(age: number): this {
    this.person.age = age;
    return this;
  }

  getResult(): Person2 {
    return this.person;
  }
}

const personBuilder = new PersonBuilder2();

const person1 = personBuilder.setName('Lucas').setAge(28).getResult();
personBuilder.newPerson();
const person2 = personBuilder.setName('Lucas').setAge(28).getResult();
console.log(person1, person2);
