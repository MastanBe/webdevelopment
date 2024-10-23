//Arrow functions
const greet=(name)=> name;
console.log(greet("Mastan Be"));
const add=(num1,num2)=>{
    return num1+num2;
};
console.log(add(3,9));
//setTimeout using arrow functions
// const intervalID=setTimeout(()=>
// {
//     console.log("Hello");
//     setTimeout(()=>{
//         console.log("Hey");
//        setTimeout(()=>
//         {
//             console.log("Namste");
//             setTimeout(()=>
//             {
//                 console.log("Hi");
//                 setTimeout(()=>
//                 {
//                     console.log("Mastan Be");
//                 },1000);
//             },1000);
//         },1000);
    
//     },1000);
    
// },1000);
// setTimeout(function(){
//     console.log("using set timeout");

// },1000);
// console.log(intervalID);
let name="Mastan Be",age=21;
const person={
    name:name,
    age:age,

}
//function returning object using enhanced object literal
function getPerson(name,age)
{
    return {
        name,
        age
    }
}
const obj={
    sum:(a,b)=>(a+b),
    mul:(a,b)=>{return a*b}
};
console.log(person);
console.log(getPerson(name,age));
console.log(obj.sum(5,5));
console.log(obj.mul(5,5));
function multiply(a,b=1)
{
    // console.log("function using default value if no value given to");
    return a*b;

}
console.log(multiply(10));
console.log(multiply(10,2));
let fruits=["apple","banana","mango","guvava"];
let fun =function (a,b,c,d)
{
    console.log(a,b,c,d);
    //return fruits;
}
console.log("Spreading array into individual elements using spread operator");
console.log(fun(...fruits));
const nums1=["one","two","three","four"];
const nums2=["five","six"];
console.log("Concating using spread operator");
const concat=[...nums1,...nums2,"seven"]; //Concating using spread operator
console.log(concat);
const person1={...person};
console.log(person1);//shallow copy using spread operator
function rest(x,...value)//rest operator it takes indefinte no of parameters
{
    console.log(x);
    console.log(value);
    return value;
}
//In array destructuring name doesnot matter but order matters
//object destruturing where name matters then the order

[a,b,c,d]=rest(1,2,3,4,5);//array destructuring
console.log("Array destructuring : "+a,b,c,d);
const colors=["red","blue","black","green"];
[colour1,...allColors]=colors;
console.log(colour1);
console.log(allColors);


//object destruturing 
const details={
    Name:"mastan be",
    Age:21,
    country:"India"
};

const {country,Name,Age,}=details;
console.log(Name,age,country);

const {country:Country,Name:userName,Age:userAge}=details;//assiging them to seperate varaiables
console.log(Country,userAge,userName);
let number1=[100,200]
function func(a,b,c=5)
{
    console.log("example for spread operator");
    return `the string contains ${a},${b},${c} in it.`;

}
let val=func(...number1);
console.log(val);

function restOp(a,nums)
{
    console.log(a);
    console.log(nums);
}
restOp(10,number1);
const person2={
    Naam:"Mastan Be",
    qualification:"B.Tech",
    address:{
        district:"kurnool",
        state:"andhrapradesh",
        pincode:518500
    },
    subjects:{
        programming:["java","Python"],
        core:["ecad","ecd","dcd"],
        coreProgramming:["vlsi","vhdl"]

    }
    
}
const {Naam,qualification,address:{ district,state,pincode},subjects:{
    programming,core,coreProgramming
}}=person2;
console.log(Naam,district,qualification,coreProgramming);

//Nested Destructuring 
const songs = [
      { name: "Lucky You", singer: "Joyner", duration: 4.34 },
      { name: "Just Like You", singer: "NF", duration: 3.23 },
      { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
      { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
      { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23 },
    ];
[,,{name,singer,}]=songs;
console.log(name,singer);
//function destructuring
function funcDestructuring({Naam})
{
    console.log(Naam);
}
funcDestructuring(person2);

//ternary operator
let password=9;
function passwordChecker(password)
{
    return (password<=8)?(password===8)?"Strong password":"password less than 8":"password is lenghty";
}
let pass=passwordChecker(password);
console.log(pass);
// for in loop
console.log("Using For in loop");
for(let key in person2){
    console.log(key,person2[key]);
}
// for of loop
console.log("Using For of loop");
for(let key of songs){
    console.log(key);
}

const num=[10,30,20,40,80,20];
const words=["hello","world","namste","javascript"];
let sum=0;


let total=num.forEach((number)=>
{
    sum+=number;
    console.log(sum);
})
let change=words.forEach((word,index,arr)=>
{
    arr[index]=word[0].toUpperCase()+word.slice(1);
    console.log(arr[index]);

})
console.log(words);
console.log("using for of loop");
for(let word of words){
    console.log(word);
}
console.log("using for in loop");
for(let word in words){
    console.log(word,words[word]);
}
console.log("using for each loop");
words.forEach((word)=>{
    console.log(word);}
)
let n=[1,2,3,4,5];
let s=0;
n.forEach((x)=>
{
    s=s+x;
})
console.log(s);
let numbers=[1,2,3,4];
let double = numbers.map((num) => num * 2);
console.log(numbers);
console.log("using map method");
//map create new array with the result and returns the new resulted array
console.log(double);

let doub=[];
numbers.forEach((n1)=>{
    doub.push(n1*2);

});
console.log("using forecah method");
// for each returns undefined it doesn't create array with 
//results as it just provides iterates over each element in the array
console.log(doub);

