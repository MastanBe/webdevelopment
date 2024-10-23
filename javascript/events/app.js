const para=document.querySelector('.para');
const form=document.querySelector('form');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
para.addEventListener('click',()=>
{
    console.log("Hello world");
})
//event object
form.addEventListener("submit",(event)=>{
    event.preventDefault();//if you want to see the event info 
    console.log(email.value,password.value);
});
