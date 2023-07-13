"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDateBaseClassic = void 0;
class MyDateBaseClassic {
    constructor() {
        this.users = [];
    }
    static get instance() {
        if (MyDateBaseClassic._instance === null) {
            MyDateBaseClassic._instance = new MyDateBaseClassic();
        }
        return MyDateBaseClassic._instance;
    }
    add(user) {
        this.users.push(user);
    }
    remove(index) {
        this.users.splice(index, 1);
    }
    show() {
        for (const user of this.users) {
            console.log(user);
        }
    }
}
exports.MyDateBaseClassic = MyDateBaseClassic;
MyDateBaseClassic._instance = null;
const myDbClassic = MyDateBaseClassic.instance;
myDbClassic.add({ name: 'user1', age: 18 });
myDbClassic.add({ name: 'user2', age: 45 });
myDbClassic.add({ name: 'user3', age: 80 });
myDbClassic.add({ name: 'user4', age: 58 });
myDbClassic.add({ name: 'user5', age: 28 });
myDbClassic.remove(2);
myDbClassic.show();
