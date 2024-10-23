console.log("conditional flow statements");
let a=10;
let b=5;
console.log("if -elseif- else");
if(a>b){
    console.log("A is greater than B");
}
else if(a===5)
    {
        console.log("A is Equal to B");

    }
else{
    console.log("A is less than B")
}
let password;
if(password===8)
    {
        console.log("Welcome");
    }
else if(password<=8)
    {
        console.log("Password is too short");
    }
else if(password>=8)
    {
        console.log("Too Long Password & password should be 8 charcaters");
    }
else{
    console.log("please provide a password");
}
//Switch statement
console.log("Switch statement");
let x=2;
let bulb;
switch(x)
{
    case 0:
        bulb="Off"
        console.log(`Bulb is in ${bulb} condition `);
        break;
    case 1:
        bulb="On";
        console.log(`Bulb is in ${bulb} condition`);
        break;
    default:
        console.log("Switch is in between on and off switch it correctly");

}
let day=4;
switch(day)
{
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is tuesday");
        break;
    case 3:
        console.log("Today is wednesday");
        break;
    case 4:
        console.log("Today is thursday");
        break;   
    case 5:
        console.log("Today is friday");
        break;
    case 6:
        console.log("Today is satureday");
        break;
    case 7:
        console.log("Today is sunday"); 
        break;
    default:
        console.log("Don't know what day is today");

}
let fruit="banana";
switch(fruit){
    case 'banana':
        console.log("Banana is good");
        break;
    case 'orange':
        console.log("I am not a fan of orange");
        break;
    case 'apple':
        console.log("How you like  them apples");
        break;
    default:
        console.log(" I have never heard of that fruit");
}
//Loops
console.log("Loops");
console.log("for loop");
for (let i= 1; i < 3; i++) {
    console.log("outer loop ",i);
    for(let j=1; j<=3;j++)
        {
            console.log("Inner loop ",j)
        }
}
for(let i=1;i<=1000;i+=300)
    {
        console.log(i);
    }
console.log("While loop in Javascript");
let i=10;
while(i<=100)
    {
        console.log("Mastan Be ",i);
        i+=30;
 
}
let j=10; 
console.log("Do while  loop in javascript");
do{
    console.log("do while ",j);
j+=10;
}while(j<=100);

//logical operators along with conditional flow statements
console.log("Logical operators");
let count=36;
if(count>30 && count===35)
    {
        console.log("Logical And");
    }
    else if(count>40||count===36)
        {

            console.log("Logical or",!count);

        }

        else{
            console.log("logical");
        }

//Arrays
let favSingers=["arjit","atif","darshan"];
console.log(favSingers[0]);
let favNumbers=[9,31,3,19];
let mixedArr=["Mastan Be",[10,20,30],123 ,true];
console.log(mixedArr);
console.log(mixedArr[1][1]);

const fruits=["apples","banana","grapes","guvava"];
console.log(`fruit s--- ${fruits} `);
console.log(`fruits reversed --- ${fruits.sort().reverse()}`);
fruits.push("new banana");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("new Apple");
console.log(fruits);
//fruits.shift("new");
const totalArr=fruits.concat(favNumbers);
console.log(fruits.includes("new Apple"));
console.log(totalArr);
console.log(totalArr.length);
console.log(totalArr.join("-"));
console.log(favNumbers);
console.log(favNumbers.reverse());
console.log(favNumbers.sort());

//objects
console.log("Objects");
const car={
    type:"Ac",
    model:"BMW",
    color:"red"
};
console.log(`type of car "${typeof car}"`);
console.log(`color of car "${car.color}"`); //acessing color attribute
car.wheels=4; //adding wheels attribute
console.log(`car is added with new attribute wheels `,car);
delete car.type; //removing type property
console.log(`after deleteing the type property : `,car);
console.log(car['model']);// another way of accessing object elements

console.log("Functions");

// function declartion
function greet() 
{

    return "Good Moring";
}
function sayHello(name)
{
    console.log(`Hello ${name}`);
}
function myFunction(num1,num2)
{
    return num1*num2;
}

//Function Expression
let greetings=function(name)
{
    return ` Have a nice day ${name} . we are using function expression`;
}
const value=greet();
const multiply=myFunction(3,3);
console.log(value);
console.log(sayHello("Mastan Be"));
console.log(multiply);
console.log(greetings("Mastan Be"));


//Callback functions

console.log("Call Back Functions");
function func(callBack)
{
    console.log("I am a normal function");
     callBack();
}
function callBack()
{
    console.log("I am  a callback function");
}


func(callBack);

function fun(name,cb)
{
    console.log(`Hello ! my name is ${name}`);
    return cb();
}
let callBackFunc=fun("mastan be",function cb()
{
    console.log("using callback function");``

});

function showCallFunc(fn)
{
    let val=100;
    fn(val);
}
showCallFunc(function (value)
{
    console.log(value);
});

//method in javascript

const person={
    name:"sponzebob",
    age:10,
    fun:function greet()
    {
        return `My name is ${person.name} & am ${person.age} years old`
    },
    funcType:function()
    {
        return "am anononymous function using as a method inside [person] object";
    }
}
console.log(person.fun());
//console.log(person.greet()); //we can't call now 
// using function name because already we assigned a variable 
// if you try to call means you will get reference error
console.log(person.funcType())

//javascript to JSON------> JSON.stringfy(js object)
//JSON to javascript-------JSON.parse(JSON object)
const person1={
    Name:"Mastan Be",
    age:22,
    qualification:"B.Tech",
    address:{
        district:"kurnool",
        state:"andhrapradesh",
        pincode:518500
    }
}
console.log(typeof person1,person1);
let JsonString=JSON.stringify(person1);//converts JS to JSON
console.log(JsonString);
let JsObject=JSON.parse(JsonString);//Converts Json to Js
console.log(JsObject);
// //Dates
let date=new Date();
let year=date.getFullYear();
let month=date.getMonth();
let days=date.getDay();
let hours=date.getHours();
let minutes = date.getMinutes();
let seconds=date.getSeconds();
let milliseconds=date.getMilliseconds();
console.log(year);
console.log(month);
console.log(days);
console.log(hours);
console.log(minutes);
console.log(milliseconds);
//different ways of formatting dates 
console.log(date.toDateString()); //Mon May 13 2024
console.log(date.toISOString()); //2024-05-13T04:07:48.096Z
console.log(date.toLocaleDateString());//5/13/2024
//setInterval
//setInterval repeatedly executing a function (or) block of code
// at a specific interval
const intervalID=setInterval(function(){
    console.log("executes repeatedely for every 2 seconds")
},2000);
//setTimeout
//executes function after specifed delay
setTimeout(function()
{
    console.log("executes only after 2 seconds");
    clearInterval(intervalID);
},2000); 

let templateString=`The Quick
brown fox
jumps over
the lazy dog`;
console.log(templateString);
let fname="Mastan Be";
let lname="Shaik";
console.log(`${fname} ${lname}`);