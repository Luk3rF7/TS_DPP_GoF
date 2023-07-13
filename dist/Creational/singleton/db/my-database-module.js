"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDateBaseModule = void 0;
const users = [];
exports.MyDateBaseModule = {
    add(user) {
        users.push(user);
    },
    remove(index) {
        users.splice(index, 1);
    },
    show() {
        for (const user of users) {
            console.log(user);
        }
    },
};
