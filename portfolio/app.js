const tablinks=document.querySelectorAll('.tab-links');
const tabcontents=document.querySelectorAll('.tab-contents')
tablinks.forEach((tablink)=>{
  const contentTab=tablink.id.toLowerCase();
  tablink.addEventListener('click',(event)=>{
    tablinks.forEach((link)=>{
      link.classList.remove('active-link');
    }) 
    tabcontents.forEach((content)=>{
      content.classList.remove('active-tab');
    })
    const activeContent=document.getElementById(tablink.id.toLowerCase());
    tablink.classList.add('active-link');
    activeContent.classList.add('active-tab');
  
  })
 
})
const menu=document.getElementById('menu');
const sidemenu=document.getElementById('side-menu');
const cross=document.getElementById('cross');

menu.addEventListener('click',()=>{
  sidemenu.style.right="0px";
  console.log(sidemenu);
})
cross.addEventListener('click',()=>{
  sidemenu.style.right="-200px";
  console.log(sidemenu);
})