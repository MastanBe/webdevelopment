const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
const paragraph=document.querySelector('.para');
const colorMap = {
    pink: 'hsl(350, 92%, 67%)',
    yellow: 'rgb(245, 245, 27)',
    green: '#18cc18',
    red: '#da1c1c',
    skyblue: '#62c8f0'
};
paragraph.addEventListener('dblclick',function () {
    console.log("pargraph");
    
})
paragraph.addEventListener('dblclick', function(event) {
   event.preventDefault(); // Prevent the default right-click menu from appearing
   console.log(event);
   window.open('https://google.com', '_self');
   
    // body.style.backgroundColor = 'blue'; // Change to original or any other color
});



const para = document.querySelector('p');

para.addEventListener('dblclick', function(event) {
    event.preventDefault(); // Prevent the default right-click menu from appearing
    window.open('https://youtube.com', '_blank'); // Open a new page
});

paragraph.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default right-click menu from appearing
})


buttons.forEach(function (button) {
    button.addEventListener('mouseenter',  (event)=> {
        const color=button.id;
        const colour=event.target.id;
        if (color==='pink') {
            body.style.backgroundColor=color;
        }
        else if(color==='yellow'){
            body.style.backgroundColor=color;
        }
        else if(color==='green'){
            body.style.backgroundColor=color;
        }
        else if(color==='red'){
            body.style.backgroundColor=color;
        }
        else{
            body.style.backgroundColor=color;
        }
        // switch (color) {
        //     case 'pink':
        //         body.style.backgroundColor=color;
        //         break;
        //     case 'yellow':
        //         body.style.backgroundColor=color;
        //         break;
        //     case 'green':
        //         body.style.backgroundColor=color;
        //         break;
        //     case 'red':
        //         body.style.backgroundColor=color;
        //         break;
        //     case 'skyblue':
        //         body.style.backgroundColor=color;
        //         break;
        //     default:
        //         body.style.backgroundColor=color;
        //         break;
        // }

        body.style.backgroundColor=colour;

        
    })
})








