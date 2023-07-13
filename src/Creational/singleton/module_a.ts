import { MyDateBaseFunction } from './db/my-database-function';
const myDbClassic = MyDateBaseFunction;
myDbClassic.add({ name: 'user6', age: 18 });
myDbClassic.add({ name: 'user7', age: 45 });
myDbClassic.add({ name: 'user8', age: 80 });
myDbClassic.add({ name: 'user9', age: 58 });
myDbClassic.add({ name: 'user10', age: 28 });
myDbClassic.show();
export { myDbClassic };
