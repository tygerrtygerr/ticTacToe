/*------- constants------*/






/*----app state (variables)------*/

let board;
let turn = "X";



/*----- cached element references-----*/

//using javascript to reference our index.html document
const squares = Array.from(document.querySelectorAll('#board div'));  //Array.from() method makes an array out of something else


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
        
        squares[index].textContent = mark
    });
}

function handleTurn(event){
    let index = squares.findIndex(function(square){
        return square === event.target
    })

    board[index] = turn;

    console.log(board)

}
 //call the init function

 init();