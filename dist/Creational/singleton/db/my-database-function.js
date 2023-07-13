"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDateBaseFunction = void 0;
exports.MyDateBaseFunction = (function () {
    const users = [];
    return {
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
})();
