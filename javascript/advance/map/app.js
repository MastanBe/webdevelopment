const numbers=[1,2,3,4,5];
const results=numbers.map((num)=>{return num*10})//map returns the new array with result based on operation
console.log(results);
let mul=[];
numbers.forEach((num)=>// forEach iterates over individual element and returns undefiend.
    mul.push(num*10)
);
console.log(mul);
const ages=[32,22,16,10,11,18];
let res=ages.filter((age)=> age>=18 );
console.log(res);
console.log(ages.find((age)=>age>=18));
const words=["spray","limit","elite","excellent","javascript","destructuring"];
console.log(words.filter(word=>word.length>6));//filter return  multiple items which satisfy the condition
console.log(words.find(word=>word.length>6));//find returns only one first item which satisfy the condition


let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const pr=products.find((product)=>product.category==="Books");
console.log(pr);
everyRes=products.every((product)=>product.category==="Books");
someRes=products.some(product=>product.category==="Books");
console.log(everyRes);
console.log(someRes);
const sum=numbers.reduce((p,c)=>{
    return p*c
},1);
console.log(sum);
// map[key,value]
const map=new Map();
map.set("a",1);
map.set("b",2);
map.set("c",3);
console.log(map.get("a"));
console.log(map.size);
map.delete("b");
console.log(map.size);
for(let [key,value] of map)
    {
        console.log(key,value);
    }
for(let key of map.keys()){
    console.log(key);
    
}
console.log("values");
for(let value of map.values()){
        console.log(value);
}
//set allows only unique values
const set=new Set();
set.add("apple");
set.add("banana");
set.add("carrot");
set.add("apple");

console.log(set,set.size,set.has("apple"));
set.delete("apple");
console.log(set);
set.clear();
console.log(set);