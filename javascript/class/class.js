const person={
    name:"alice"
}
const newperson={};
//proto used to access the proto chain of the object
//by using this we can set or get prototype
Object.setPrototypeOf(newperson,person);// newperson.__proto__=person; this deprecated
console.log(newperson);
console.log(Object.getPrototypeOf(newperson)===person);
//constructor function
function Person(name,age)
{
    this.name=name;
    this.age=age;
}
Person.prototype.intro=function(greeting){
    return `${greeting} ,${this.name}`;
}
const person1=new Person("Abc",20);
console.log(Person.prototype.intro.call(person,"Hello"));  //call in objects


console.log(person1.intro());
console.log(Object.getPrototypeOf(person1)===Person.prototype);
function Animal(legCount){

    this.legCount=legCount;
    console.log(`The Animal has ${this.legCount} legs`);
}
Animal.prototype.walk=function(){
    return `The Animal has ${this.legCount} legs`;
}
function Dog(name,age,legCount)
{
    Animal.call(this,legCount);//call in constructor function
    //calling explicitly by providing current context
    this.name=name;
    this.age=age;
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark=function() {
    return `The dog name is ${this.name} has age of ${this.age}`;   
}
// const animal=new Animal(4);
const dog=new Dog("buddy",5,4);


console.log(dog.bark());
console.log(dog.walk());

//classes
// function User(name,age){
//     this.name=name;
//     this.age=age;
// }
// User.prototype.changeName=function(){
//     return ` using behind scene ${this.name.toUpperCase()}`;
// }

class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    changeName(){
        return ` using clasess ${this.name.toUpperCase()}`;
    }
}
class Employee extends User{
    constructor(name,age,position){
        super(name,age);
        this.position=position;
    }
    empDetails(){
        return `Hello ${this.name} to the role of ${this.position}`;
    }
}
const emp=new Employee('Mastan Be',21,"ASE")
console.log(emp.empDetails());



