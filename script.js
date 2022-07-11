const uChoice = document.getElementById("uChoice");
const cChoice = document.getElementById("cChoice");
const winner = document.getElementById("winner");
const reloadBtn = document.querySelector(".rel");
const pScore = document.querySelector('.myPoint');
const cScore = document.querySelector('.compPoint');
const moves = document.querySelector('.moves');
const Result = document.querySelector('.Result');


let p_point = 0;
let c_point = 0;
let move = 10;

const computerChoice = ['💎','🖐','🤞'];
    
const win = () => {
    winner.innerHTML = "You win";
    winner.style.color = "green";
}
const lose = () => {
    winner.innerHTML = "You lose";
    winner.style.color = "red";
}
const tie = () => {
    winner.innerHTML = "Match tie";
    winner.style.color = "blue";
}


userClick = (userChoice) => {
    uChoice.innerHTML = "";
    uChoice.innerHTML = userChoice;
    compClick();
}

function compClick() {
    const computerChoice = ['💎','🖐','🤞'];
    cChoice.innerHTML = computerChoice[Math.floor(Math.random() * 3)];  
    winnerDeclare();
}

function winnerDeclare(){

    
    if(uChoice.innerHTML === '💎'){
        if (cChoice.innerHTML === '🖐') {
            lose();
            move--;
            c_point++;
            cScore.innerHTML = `${c_point}`;
            moves.innerHTML = `${move}`;
        }else if(cChoice.innerHTML === '🤞'){
            win();
            move--;
            p_point++;
            pScore.innerHTML = `${p_point}`;
            moves.innerHTML = `${move}`;
        }else{
            tie();
            move--;
            moves.innerHTML = `${move}`;
        }
    }
    else if(uChoice.innerHTML === "🖐"){
        if (cChoice.innerHTML === "💎") {
            win();
            move--;
            p_point++;
            pScore.innerHTML = `${p_point}`;
            moves.innerHTML = `${move}`;
        } else if(cChoice.innerHTML === "🤞"){
            lose();
            move--;
            c_point++;
            cScore.innerHTML = `${c_point}`;
            moves.innerHTML = `${move}`;
        }else{
            tie();
            move--;
            moves.innerHTML = `${move}`;
        }
    }
    else{
        if (cChoice.innerHTML === "🖐") {
            win();
            move--;
            p_point++;
            pScore.innerHTML = `${p_point}`;
            moves.innerHTML = `${move}`;
        } else if(cChoice.innerHTML === "💎"){
            lose();
            move--;
            c_point++;
            cScore.innerHTML = `${c_point}`;
            moves.innerHTML = `${move}`;
        }else{
            tie();
            move--;
            moves.innerHTML = `${move}`;
        }
    }
    
    if(move == 0){
        moves.innerHTML = 10;
        pScore.innerHTML = 0;
        cScore.innerHTML = 0;
        setTimeout(() => {
            reloadd();
        }, 1000);
        winner.innerHTML = "GAME OVER...!!! TRY AGAIN";
        winner.style.color = "Purple";
    }

    if(p_point == 5 ){
        setTimeout(() => {
            reloadd();
        }, 1000);
        winner.innerHTML = "You won the game";
        winner.style.color = "Purple";
    }
    if(c_point == 5){
        setTimeout(() => {
            reloadd();
        }, 1000);
        winner.innerHTML = "You lose the game";
        winner.style.color = "Purple";
        pScore.innerHTML = 0;
        cScore.innerHTML = 0;
    }
    if(move == 0 && p_point == 5){
        setTimeout(() => {
            reloadd();
        }, 1000);
        winner.innerHTML = "You won the game";
        winner.style.color = "Purple";
        pScore.innerHTML = 0;
        cScore.innerHTML = 0;
    }
    if(move == 0 && c_point == 5){
        setTimeout(() => {
            reloadd();
        }, 1000);
        winner.innerHTML = "You lose the game";
        winner.style.color = "Purple";
        pScore.innerHTML = 0;
        cScore.innerHTML = 0;
    }
    if(move == 0 && p_point == 5){
        setTimeout(() => {
            reloadd();
        }, 1000);
        winner.innerHTML = "You win the game";
        winner.style.color = "Purple";
        pScore.innerHTML = 0;
        cScore.innerHTML = 0;
    }
}
function reloadd(){
    window.location.reload();
}