/*------- constants------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] 




/*----app state (variables)------*/

let board;
let turn = "X";
let win;



/*----- cached element references-----*/

//using javascript to reference our index.html document
const squares = Array.from(document.querySelectorAll('#board div'));  //Array.from() method makes an array out of something else
const messages = document.querySelector('h2');

/*-----event listeners----*/

document.getElementById('board').addEventListener('click', handleTurn);

/*------functions----*/

function init() { //initializing function to know what the board is when empty 

    board = [
        "", "", "", 
        "", "", "", 
        "", "", ""
    ];

    render();

}

function render(){
    board.forEach(function(mark, index) {
        //this code below runs for ever array element
        
        squares[index].textContent = mark;
    });

    messages.textContent = win ? `${win} wins!` : `It's ${turn}'s turn!`;

}

function handleTurn(event){
    let index = squares.findIndex(function(square){
        return square === event.target
    })

    board[index] = turn;
    turn = turn === "X" ? "O" : "X"    //(conditional) ? "" : ""  <--- terenary expession

    win = getWinner();
    render();
}

function getWinner(){
    //test for a winner each turn
    let winner = null;

    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]){
            winner = board[combo[0]];
        }
    })
}
 //call the init function

 init();