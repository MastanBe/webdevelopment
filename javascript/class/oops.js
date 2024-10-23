//class
class Car{
    //constructor
    constructor(name,color){
        console.log("parent constructor");
        this.name=name;
        this.color=color;
    }
    //method
    start(){
        console.log('car started');
    }
    stop(){
        console.log('car stopped');
    }
}
//object creation
const car1=new Car("bmw","red");
console.log(car1);
//inheritance
class ToyataCar extends Car{
    #model;
    constructor(name,color,model,speed,mileage){
        //to invoke parent'sconstructor
        console.log("child constructor");
        super(name,color);
        this.#model=model;
        this.speed=speed;
        this.mileage=mileage;
        //method overloading
        if(mileage===null){
            this.feature(speed);
        }
        else{
            this.feature(speed,mileage)
        }
    }

    drive(){
        this.#startEngine();
        console.log(`drving ${this.#model}`);

    }
    //encapsulation with private method and variable
    #startEngine(){
        console.log("starting engine");
        console.log("private method");
    }
    //method overriding
    start(){
        super.start();//invoking parent method
        console.log("Starting toyata car");
        console.log("Method overriding");
    }
    carSpeed(){
        console.log("Toyata runs with speed :",this.speed,"Km/hr");
    }
    //method overloading
    feature(a){
        console.log("with one arg",a);
    }
    feature(a,b){
        console.log("with two args",a,b);
    }
}

const toyata=new ToyataCar("abc","red","xyz",250,90);
toyata.start();
toyata.carSpeed();
toyata.drive();
// toyata.feature(10);
// toyata.feature(10,20);