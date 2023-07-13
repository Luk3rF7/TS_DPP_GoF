import { Vehicle } from '../vehicle/interface/vehicle';
import { CarFactory } from '../factories/car-factory';
import { BicycleFactory } from '../factories/bicycle-factory';
import { randomNumbers } from '../utils/random-numbers';

export function randomCarAlgorithm(): Vehicle {
  //criando:
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  //instanciando:
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');
  const bicycle = bicycleFactory.getVehicle('Bicycle');
  //Guardando no array:
  const cars = [car1, car2, bicycle];
  //retornando:
  return cars[randomNumbers(cars.length)];
}
