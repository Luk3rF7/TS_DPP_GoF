import { MealBuilderProtocol } from '../interface/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Rice, Beans, Meat, Beverage, Dessert } from './meals';

//
export class MainDishBuilder implements MealBuilderProtocol {
  //
  private _meal: MealBox = new MealBox();
  //reset
  reset(): this {
    this._meal = new MealBox();
    return this;
  }
  //metodos
  makeMeal(): this {
    const rice = new Rice('Arroz', 5.0);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 20);
    this._meal.adc(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Suco', 8);
    this._meal.adc(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 10);
    this._meal.adc(dessert);
    return this;
  }
  getMeal(): MealBox {
    return this._meal;
  }
  getPrice(): number {
    return this._meal.getPrice();
  }
}
