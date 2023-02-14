/*----- constants -----*/
let currentPlayer = true; // X : O

/*----- state variables -----*/
winningArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
/*----- cached elements  -----*/
const buttons = document.querySelectorAll('button')
const button = document.querySelector('.button')
const result = document.querySelector('.result')
const tr = document.querySelector('tr')
const headerTwo = document.querySelector('h2');
const restart = document.querySelector('.restart')

/*----- event listeners -----*/
button.addEventListener("click", clickBtn);
result.addEventListener('click', restart)

/*----- functions -----*/
// how shall I check if anything exists in the box
// capture the current player
// modify the value on the box

// swap player function
if (currentPlayer) {
currentPlayer = false;

} else { currentPlayer = true}


function clickBtn (event){
if (event.target.value === occupied) {
event.target.innerText === currentPlayer;
}

event.target.value = "occupied";
}

function displayPlayer (){
if (XPlayer) {
 headerTwo.innerText = "Player: X";
} else {
 headerTwo.innerText = "Player: O";
}
}

function displayWinner (){
    if (XPlayerWin) {
 result.innerText = "Congrats!! X Win!";
} else {
 result.innerText = "Congrats!! O Win!";
}
}

let XPlayer = true;
let XPlayerWin = true;
displayWinner ();
displayPlayer ();