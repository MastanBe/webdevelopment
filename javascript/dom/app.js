//getElementByID
title = document.getElementById("green").innerHTML;
title.padding = "100px";
console.log(title);
console.log(document.getElementById("green").setAttribute("id", "Green")); //set attribute
console.log(document.getElementById("Green").getAttribute("id")); //get attribute
const key = document.getElementById("Green");
key.style.borderRadius = "50px";
key.style.backgroundColor = "pink";
key.style.border = "200px";
key.style.boxShadow = "5px 5px 10px yellow";
key.style.padding = "10px";
const value = document.querySelector("ul");
const li = value.querySelector("li");
console.log(li);
li.style.backgroundColor = "pink";
li.innerText = "ONE";
li.style.padding = "15px";
li.style.borderRadius = "5px";
//querySelectorAll gives Nodelist
const val = document.querySelectorAll("li");
console.log(val);
//acessing individual element in NodeList
val[1].style.backgroundColor = "yellow";
val[2].style.backgroundColor = "brown";
val[3].style.backgroundColor = "skyblue";
//converting into array from NodeList using spread Operator
const arr = [1, 2, 3, 4];
//converting into array from NodeList using Array.from method
const array = Array.from(val);
array.forEach((li) => {
  console.log(li);
});
let con = arr.map((val) => {
  return val * 2;
});
console.log(arr);
console.log(con);
const parent = document.querySelector(".div");
const child=document.querySelector(".day1");
for (let index = 0; index < parent.children.length; index++) {
  console.log(parent.children[index].innerText);
}
console.log(parent);
console.log(parent.children);//accessing children
console.log(parent.children.length);//length of child nodes
console.log(parent.children[1]);//accessing specific child
console.log(parent.firstElementChild.style.color="pink");//accessing first child
console.log(parent.lastElementChild.innerText);//accessing last child

console.log(child);
console.log(child.parentElement);//from child accessing parent
console.log(child.nextElementSibling);//next element
console.log(child.previousElementSibling);//previous element
console.log(parent.childNodes);//no of child nodes

