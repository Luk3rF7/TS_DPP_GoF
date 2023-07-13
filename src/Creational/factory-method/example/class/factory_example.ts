import { ProductExmaple } from '../interfaces/prod_example';

class ConcreteProductExample implements ProductExmaple {
  sayHi(): void {
    console.log('hi');
  }
}
abstract class CreateFactory {
  abstract factoryMethod2(): ProductExmaple;

  createAndShow2(): void {
    const product_1 = this.factoryMethod2();
    console.log(product_1);
  }
}

class ConcreteCreate2 extends CreateFactory {
  factoryMethod2(): ProductExmaple {
    return new ConcreteProductExample();
  }
}

const creater2 = new ConcreteCreate2();
const product1 = creater2.factoryMethod2();
product1.sayHi();
creater2.createAndShow2();
