console.log("hello Javascript");

console.warn("Something went wrong");

console.error('error');
console.clear("console is clearing");

console.log("logging after the console.clear");

console.table({name:"mastan be" ,branch:"ece"})

//declaratin
let name;
name="mastan be"
//intialization at the time of declaration

let gender="female";
let n=2,n1=2.00,n2=34.48946 ,n3='m',n4=true
console.log(n ,n1,n2,n3,n4);
console.log(typeof n,typeof n1,typeof n2,typeof n3,typeof n4);
console.log(name);
console.log(typeof name);
let firstNumber=9;
let secondNumber=3;
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
console.log(firstNumber ** secondNumber);



let a=null;
if(a)
    {
        console.log("true value");
       
    }
else{
    console.log("falsy value")
   
}
console.log(typeof a)

let pl=true;
let isHard=false;
let fav=3;
let val="as3"
console.log(fav+undefined);
console.log(fav+pl+a);
console.log(fav+isHard);
console.log(val+fav);
console.log(10===10);
console.log(10==='10');
console.log(10==10);
console.log(10=='10');
let fNumber=3,sNumber=9;
console.log(firstNumber>secondNumber);
console.log(firstNumber<secondNumber);
console.log(firstNumber=== secondNumber);
console.log(firstNumber== secondNumber);
console.log(firstNumber>=secondNumber);
console.log(firstNumber<=secondNumber);
console.log(firstNumber!== secondNumber);
console.log(firstNumber!= secondNumber);


let firstName="Mastanbe",lastName="  Shaik";
let fullName=`${firstName} ${lastName} concat using backticks`
let desc=`we can write the
multi line content
using back ticks`
console.log(fullName);
console.log(firstName.concat(lastName));
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.length);
console.log(firstName.slice(0,3));
console.log(firstName.split('').join("")); // split method converts string into array of elements 
console.log(lastName.trimStart());
console.log(desc);

let favFirstName="mastan be ";
let favLastName="Shaik";
let favFullName=favFirstName.concat(favLastName);
let uppercase=favFullName.toUpperCase();
let messgae=`my favourite name is ${uppercase} & say something`
messgae+=` best show is silicon valley`;
console.log(messgae);

let number="50"
let str=50
number= +number; //conversion using + operator
number=parseInt(number); // conversion using parseInt method
number=Number(number); //conversion using Number() constructor
str=str.toString(); //conversion  to string using toString method
str=String(str);  //conversion using String() constructor
console.log(typeof number);
console.log(typeof str);