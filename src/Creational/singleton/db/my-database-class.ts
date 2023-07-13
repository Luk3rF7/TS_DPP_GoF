import { User } from '../interface/user';
// * Utilizando classes - POO
//não fuciona me javascrip -> getinstance()
//metodo que funciona com javascript
export class MyDateBaseClassic {
  private static _instance: MyDateBaseClassic | null = null;
  private users: User[] = [];
  private constructor() {}

  static get instance(): MyDateBaseClassic {
    if (MyDateBaseClassic._instance === null) {
      MyDateBaseClassic._instance = new MyDateBaseClassic();
    }
    return MyDateBaseClassic._instance;
  }
  // * metodo para adicionar :
  add(user: User): void {
    this.users.push(user);
  }
  // * metodo remover:
  remove(index: number): void {
    this.users.splice(index, 1);
  }
  // * metodo mostrar:
  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

const myDbClassic = MyDateBaseClassic.instance;

myDbClassic.add({ name: 'user1', age: 18 });
myDbClassic.add({ name: 'user2', age: 45 });
myDbClassic.add({ name: 'user3', age: 80 });
myDbClassic.add({ name: 'user4', age: 58 });
myDbClassic.add({ name: 'user5', age: 28 });
myDbClassic.remove(2);
myDbClassic.show();
