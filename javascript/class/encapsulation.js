//Encapsulation
class Car {
    #make;
    #model;

    constructor(make, model) {
        this.#make = make;
        this.#model = model;
    }

    #startEngine() {
        console.log(`${this.#make} ${this.#model} engine started.`);
    }

    drive() {
        this.#startEngine();
        console.log(`${this.#make} ${this.#model} is driving.`);
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.drive();
// myCar.#startEngine(); // This will throw an error because #startEngine is private
