
let board = [];

function play(clickedId) {
let playerSpan = document.getElementById('player');
let clickedElement = document.getElementById(clickedId);

if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    'board'[clickedId] = 'X';
  
} else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    'board'[clickedId] = 'O';
}

console.log(board);

let topLeft = board[0] ;
let topCenter = board[1] ;
let topRight = board [2] ; 
let middleLeft = board [3] ; 
let middleCenter = board [4] ; 
let middleRight = board [5] ; 
let bottomLeft = board [6] ; 
let bottomCenter = board [7] ; 
let bottomRight = board [8] ; 

if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
    alert('winner!!!');
    return;
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight ) {
    alert('winner!!!');
    return;
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    alert('winner!!!');
    return;
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert('winner!!!');
    return;
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert('winner!!!');
    return;
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert('winner!!!');
    return;
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert('winner!!!');
    return;
}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
    alert ('winner!!!');
    return;
}
let boardFull = true;
for (let i = 0; i<= 8; i++ ) {
    if (board[i]=== undefined) {
        boardFull = false;
    }
}
if (boardFull === true) {
    alert("cat's game!");
}

}
