import { User } from '../interface/user';
// utilizando  function
const users: User[] = [];
export const MyDateBaseModule = {
  add(user: User): void {
    users.push(user);
  },
  // * metodo remover:
  remove(index: number): void {
    users.splice(index, 1);
  },
  // * metodo mostrar:
  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
