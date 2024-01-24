// git add .
// git commit -m "Your commit message"
// git push
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newBtn = document.querySelector('#new-btn');
let messageBlock = document.querySelector('.winnerMessage');
let msg = document.querySelector('.message');
let playerX = true;
let countBtnClick = 0;
let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box) => {
    
        box.addEventListener('click', ()=>{
            if(playerX){
                box.innerText = "X";
                playerX = false;
            }else{
                box.innerText = "0";
                playerX = true;
            }
            box.disabled = true;
            countBtnClick++;
            console.log(countBtnClick);
            
            checkPattern();
            
        })

})

const checkPattern = ()=>{
    if(countBtnClick == 9){
        drawMessage();      
    }
    for(let pattern of winningPattern){
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;

      if(pos1 != "" && pos2 !== "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
           
            console.log(`Winner found ${pos1}`);
            winnerMessage(pos1);
           
            disableBoxes();
        }
    
      }
     
    }
}

//disable all boxes once the winner is found
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
        
    }
}

//enable all boxes once the winner is found
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

//show message
const winnerMessage = (winner)=>{
    msg.innerText = `Here is your winner ${winner}`;
    messageBlock.classList.remove('hide');
    resetBtn.classList.add('hide');

    
}

//show message
const drawMessage = ()=>{
    msg.innerText = `It's a tie`;
    messageBlock.classList.remove('hide');
    resetBtn.classList.add('hide');

    
}

//reset game button
const resetGame = ()=>{
    playerX = true;
    enableBoxes();
    messageBlock.classList.add('hide');
    resetBtn.classList.remove('hide');
}




newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
