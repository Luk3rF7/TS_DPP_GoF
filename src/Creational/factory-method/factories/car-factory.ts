import { VehicleFactory } from './vehicle-factory';
import { Car } from '../vehicle/car';
import { Vehicle } from '../vehicle/interface/vehicle';

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
