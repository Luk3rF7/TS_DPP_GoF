export class Singleton {
  private static _instance: Singleton | null = null;
  private constructor() {
    //new not allowed  ouside the class
  }

  static get instance(): Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
}
const instace1 = Singleton.instance;
const instace2 = Singleton.instance;
console.log(instace1 === instace2);
