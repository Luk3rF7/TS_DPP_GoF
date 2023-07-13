type Car = { model: string; motor: string };
type CarPrototype = { showDetails(): void };

const carPrototype: CarPrototype = {
  showDetails(): void {
    console.log(this);
  },
};

const carFactory = (model: string, motor: string): Car & CarPrototype => {
  //instancio
  const idAsAPrivateMenber = Math.floor(Math.random() * 1000);
  const carObj = Object.create(carPrototype);
  // returno configurando
  return Object.assign(carObj, { id: idAsAPrivateMenber, model, motor });
};

const car1 = carFactory('Fusca', 'V8');
car1.showDetails();
const car2 = carFactory('Celta', 'Chevrolet');
car2.showDetails();
