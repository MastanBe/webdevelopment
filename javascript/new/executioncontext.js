// console.log("Javscript");
// console.log(greetings);
// console.log(x);
// console.log(greetings());

// var x=7
// function greetings(){
//     console.log("Hello! Good Morning");
// }
// function outest() {
//     var b=20
//     var z=300
//   function outer(greeting) {
//     function inner() {
//       console.log(a,greeting,b);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// var a=100
// outest()("Hello")();
// var close=a()
// close()
// abc()
// function a(){
//   let x=10,y=20
//   function b(){
//     console.log(x);
//   }
//   return b;
// }

// var abc=function(){
//   console.log("function expression can 't be hoisted");
  
// }

// let x=200
// a()
// b()
// c()
// console.log(d)
// function a(){
//   console.log("function statement");
  
// }
// var d=10
// var b=function(){
//   console.log("function expression");
  
// }
// let c=function(){
//   console.log("function expression");
  
// }


// let array=[1,2,3,4,5]
// const calculateArea=function (array){
//   let output=[]
//   for (let i = 0; i < array.length; i++) {
//     output.push(Math.PI*array[i]*array[i])
//   }
//   return output
// }
// const calculateCircumference=function (array){
//   let output=[]
//   for (let i = 0; i < array.length; i++) {
//     output.push(2*Math.PI*array[i])
//   }
//   return output
// }
// const calculateDiameter=function (array){
//   let output=[]
//   for (let i = 0; i < array.length; i++) {
//     output.push(2*array[i])
//   }
//   return output
// }
// console.log(calculateArea(array));
// console.log(calculateCircumference(array));
// console.log(calculateDiameter(array));
// let array=[1,2,3,4,5]
// const area=(radius)=>{
//   return Math.PI*radius*radius;
// }
// const circumference=(radius)=>{
//   return 2*Math.PI*radius;
// }
// const diameter=(radius)=>{
//   return 2*radius;
// }
// Array.prototype.calculate=(logic)=>{
//   let output=[]
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]))
//   }
//   return output
// }
// console.log(calculate(array,area));
// console.log(calculate(array,circumference));
// console.log(calculate(array,diameter));
// console.log(array.map(diameter))
// console.log(array.calculate(area));
const users=[
  {firstName:"MastanBe",lastName:"Shaik",age:21},
  {firstName:"spong",lastName:"bob",age:29},
  {firstName:"square",lastName:"paints",age:32}
]
const output=users.filter(x=>x.age<30).map(x=>x.firstName)

const output1=users.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age]=++acc[curr.age];
  }
  else{
    acc[curr.age]=1
  }
  return acc;
},{})
const output2=users.reduce(function(acc,curr){
  if(curr.age<30){
    console.log(curr.firstName);
    acc.push(curr.firstName)
  }
  return acc;

},[])
console.log(output);
console.log(output1);
console.log(output2);



