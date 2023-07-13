//estrutura compose de obj

//software de restaurante:

//comidas:
import { Rice, Beans, Meat } from './classes/meals';
import { MealBox } from './classes/meal-box';
import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const rice = new Rice('Arroz', 5.0);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);
const mealBox = new MealBox();

mealBox.adc(rice, beans, meat);
console.log(mealBox);
console.log(mealBox.getPrice());

// builder
const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal().getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

//builder vegan

const vegandishBuilder = new VeganDishBuilder();
const veganMeal = vegandishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
