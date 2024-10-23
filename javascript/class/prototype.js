firstName="Mastan Be";
console.log(this.firstName);
console.log(window.firstName);
console.log(this.firstName===window.firstName);
console.log("this in the global context refers to the global object (window in browsers)");
console.log("this in the global context refers to the window object");
console.log(this);
const student={
    firstName:"abc",
    marks:90,
    greeting:function(){
        console.log("this inside object refers to the object context");
        console.log(this.firstName);
    }
}
console.log(student.greeting());
//regular function
function display()
{
    console.log("in non strict mode refers to window strict mode undefined");
    return this;
}
console.log(display());

console.log("Constructor functions");
//constructor function
function showDetails(name)
{
    this.name=name;
    this.greeting=function()
    {
        console.log(`hello my name is ${name}`);
    }
    this.greet=()=>{
        console.log(`Arrow functions uses lexical scope ${name}` );
    }
    return this;
   
}
const a= showDetails("one");
const b=showDetails("two")
console.log(a.name);//output :two 
// here the value is overiding the firstvalue inorder to avoid the scenario use new keyword which create new context
const c= new showDetails("one");
const d= new showDetails("two");
const e=new showDetails("one");
console.log(c.name,d);//here c.name="one"
console.log(c.greeting());//using function expression
console.log(c.greet());//using arrow functions
console.log(d instanceof showDetails);
console.log(c.name==d.name);

function fun() {
    console.log(this.name,this.marks);
  }
  
  const person = {
    name: 'Alice',
    age:20,
    greeting:function() {
        console.log(`Hello ,my nae is ${this.name} & ${this.age} old`);
        
    },
    greet:()=>{
        console.log(`Hello ,my nae is ${this.name} & ${this.age} old`);
    },
    func(){
        console.log(`Hello ,my nae is ${this.name} & ${this.age} old`);
    }
  };
console.log(person.greeting());
console.log(person.greet());
console.log(person.func());
console.log(person.name,person.age);
  fun.call(person);
  fun.apply(person)
  greet.call(person); // Output: Alice
  greet.apply(person); // Output: Alice

//factory function :It returns new object 
function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet: function() {
        console.log(`Hello, my name is ${name}`);
      }
    };
  }
  
  const alice = createPerson('Alice', 30);
  const bob=createPerson('Bob',29)
  alice.greet(); // Output: Hello, my name is Alice
  console.log(alice);
  bob.greet();
  console.log(bob);

function car(make,model,year,color) {
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.start=function(){
        return `Starting the ${make} ${model}`;
    }
    this.stop=()=>{
        return `Stopping the ${make} ${model}`;
    }
 
}
const car1=new car('Toyata','Camry',2000,"pink");
const car2=new car("Honda","CR-V",2004,"yellow");
console.log(car1.start());
console.log(car2.stop());

//built in constructors
const num=new Number(10);
const str=new String("Hello Js");
const date=new Date();
const arr=new Array(1,224,31313);
// console.log(num,str,date,arr);
//object.create
const Car= {
    start:function(){
        return `Starting the ${this.make} ${this.model}`;
    },
    stop:()=>{
        return `Stopping the ${this.make} ${this.model}`;
    }
 
}
const obj=Object.create(Car);
obj.make="Toyata";
obj.model="Camry";
obj.year=2000;
obj.color="pink";
console.log(obj.start());
console.log(obj.stop());
  