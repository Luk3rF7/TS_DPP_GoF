interface PrototypeProto {
  clone(): PrototypeProto;
}

class PersonProto implements PrototypeProto {
  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    /*
    isso não e um clone!
    estamos apena criando um novo obj
    que tem este obj como prototipo
    */
    const newPerson = Object.create(this);
    return newPerson;
  }
}

const person1 = new PersonProto('Lucas', 28);
const person2 = person1.clone();

console.log(person1.name);
console.log('Clone?', person2.name);
