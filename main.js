const container = document.getElementsByClassName('container');
const btn = document.getElementsByClassName('btn');
const contList = [];
const controller = new AbortController();
const result = document.getElementsByClassName('result');
var board = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'p'];
var content = '';
var currentPlayer = 1;
var turns = 0;

btn[0].addEventListener('click', addBoardEvent)

function playerTurn(e){
    let num = e.target.dataset.number;
    
    if (board[num] == 'X' || board[num] == 'O') {
    } else {
        if (currentPlayer == 1) {
            content = 'X';
            currentPlayer=2;
        } else {
            content = 'O';
            currentPlayer=1;
        }

        board[num] = content;
        e.target.innerHTML = content;
        turns++;
        winCondition();
    }
}

function winCondition(){
    if ( board[0] == board[1] && board[2] == board[1]|| 
        board[3] == board[4] && board[4] == board[5] || 
        board[6] == board[7] && board[7] == board[8] || 
        board[0] == board[3] && board[3] == board[6] || 
        board[1] == board[4] && board[4] == board[7] || 
        board[2] == board[5] && board[5] == board[8] || 
        board[0] == board[4] && board[4] == board[8] || 
        board[2] == board[4] && board[4] == board[6] ) {
            result[0].innerHTML=content;
            board = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'];
        } else {
            if (turns>=9) {
                result[0].innerHTML=`No one, it' a draw :(`;
            }
        }
};

function addBoardEvent() {
    container[0].innerHTML='';
    container[0].innerHTML=`<div class="box" data-number="0"></div>
        <div class="box" data-number="1"></div>
        <div class="box" data-number="2"></div>
        <div class="box" data-number="3"></div>
        <div class="box" data-number="4"></div>
        <div class="box" data-number="5"></div>
        <div class="box" data-number="6"></div>
        <div class="box" data-number="7"></div>
        <div class="box" data-number="8"></div>`;
    const boxTree = document.getElementsByClassName('box');
    for (let i = 0; i < boxTree.length; i++) {
        boxTree[i].addEventListener('click', (e) => playerTurn(e));
    }
    board = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'p'];
    currentPlayer = 1;
}

addBoardEvent();