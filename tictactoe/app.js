let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-btn');
let newBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let container=document.querySelector('.container');
let playerX=true;

const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],
                  [2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(playerX){
            box.style.backgroundColor = "rgb(255, 80, 80)";
            box.style.color="white";
            box.innerHTML="X";  
            playerX=false;
        }
        else{
            box.innerHTML="O";
            box.style.backgroundColor = "rgb(255, 153, 0)";
            box.style.color="white";
            playerX=true;
        }
        box.disabled=true;//disabling the button once user clicks it
        checkWinner();
       
    })
})
function checkWinner(){
    // console.log(box);
    winPattern.forEach((pattern)=>{
        let positionVal1=boxes[pattern[0]].innerHTML;
        let positionVal2=boxes[pattern[1]].innerHTML;
        let positionVal3=boxes[pattern[2]].innerHTML;
        let foundWinner=false;
       
        if(positionVal1!==''&&positionVal2!==''&&positionVal3!==''){
            count++;
            if(positionVal1===positionVal2 &&positionVal2===positionVal3){
                // console.log('Winner',positionVal1);
                foundWinner=true;
                showWinner(positionVal1);
                
            }
            if(!foundWinner){
                checkDraw();
            }
     
        }
       

       
    })
}

function checkDraw() {
    let allBoxesFilled = true;
  
    boxes.forEach((box) => {
      if (box.innerHTML === '') {
        allBoxesFilled = false;
      }
    });
  
    if (allBoxesFilled) {
      showDraw();
    }
  }
  
function showWinner(winner){
    msg.innerHTML=`Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();   
}
function showDraw(){
    msg.innerHTML=`Match draw`;
    msgContainer.classList.remove('hide');
    disableBoxes();

}
const resetGame=()=>{
    playerX=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.style.backgroundColor ="skyblue";
        box.disabled=false;
        box.innerHTML='';
    }
}
newBtn.addEventListener('click',()=>{
    resetGame();
})
resetBtn.addEventListener('click',()=>{
    resetGame();
})