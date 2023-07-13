import { MyDateBaseFunction } from './db/my-database-function';
/*
  * utilizando singleton classe sem js:
import { myDbClassic as MyDateBaseClassicFromModuleB } from './module_a';
const mydbClassic = MyDateBaseClass.getinstance()
  * com js:
const mydbClassic = MyDateBaseClassFromModuleB.getinstance
  * metodo com module:
  const myDbClassic = MyDateBaseModule;
*/
// * function autoinvocaçao:
const myDbClassic = MyDateBaseFunction;
myDbClassic.add({ name: 'user1', age: 18 });
myDbClassic.add({ name: 'user2', age: 45 });
myDbClassic.add({ name: 'user3', age: 80 });
myDbClassic.add({ name: 'user4', age: 58 });
myDbClassic.add({ name: 'user5', age: 28 });
myDbClassic.remove(2);
myDbClassic.show();
