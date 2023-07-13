import { MealBuilderProtocol } from '../interface/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Rice, Beans } from './meals';

//
export class VeganDishBuilder implements MealBuilderProtocol {
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
    this._meal.adc(rice, beans);
    return this;
  }
  getMeal(): MealBox {
    return this._meal;
  }
  getPrice(): number {
    return this._meal.getPrice();
  }
}
