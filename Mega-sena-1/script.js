var state = {board: [], currentGame: [], saveGames: []};

function start() {
    createBoard();
    newGame();

    console.log(state.board);
}

function createBoard() {
    state.board = [];

    for (var i = 1; i <= 60; i++) {
        state.board.push(i);
    }
}

function newGame() {
    resetGame();
    render();
}

function render() {
    renderBoard();
}

function renderBoard() {
    var divBoard = document.querySelector('#megasena-board');
    divBoard.innerHTML = '';

    var ulNumbers = document.createElement('ul');

    for (var i = 0; i < state.board.length; i++) {
        var currentNumber = state.board[i];

        var liNumber = document.createElement('li');
        liNumber.textContent = currentNumber;

        ulNumbers.appendChild(liNumber);
    }

    divBoard.appendChild(ulNumbers);
}

function addNumberToGame(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error('Numero invalido' , numberToAdd);
        return;
    }

    if (state.currentGame.length >= 6) {
        console.error('o jogo ja esta completo.');
        return;
    }

    state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
    var nemGame = []

    for (var i = 0; i < state.currentGame.length; i++){
        var currentNumber = state.currentGame[i];

        if (currentNumber === numberToRemove) {
            continue;
        }
        newGame.push(currentNumber);
    }
    state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {

  return state.currentGame.includes(numberToCheck);
}

function savedGame () {
    if (!isGameComplete()){
        console.error('O jogo não esta completo!');
    }
    state.saveGames.push(state.currentGame);
}

function isGameComplete() {
    return state.currentGame.length === 6;
}

    function resetGame() {
        state.currentGame = [];
    }
start();

