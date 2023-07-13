"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() {
    }
    static get instance() {
        if (Singleton._instance === null) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}
exports.Singleton = Singleton;
Singleton._instance = null;
const instace1 = Singleton.instance;
const instace2 = Singleton.instance;
console.log(instace1 === instace2);
