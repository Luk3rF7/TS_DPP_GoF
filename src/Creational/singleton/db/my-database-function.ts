import { User } from '../interface/user';
// utilizando closer para definir privadas / auto invocação
export const MyDateBaseFunction = (function () {
  const users: User[] = [];
  return {
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
})();
