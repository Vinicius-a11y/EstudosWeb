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
    console.log(state.currentGame);
}

function render() {
    renderBoard();
    renderButtons();
    renderSaveGames();
}

function renderBoard() {
    var divBoard = document.querySelector('#megasena-board');
    divBoard.innerHTML = '';

    var ulNumbers = document.createElement('ul');
    ulNumbers.classList.add('numbers');

    for (var i = 0; i < state.board.length; i++) {
        var currentNumber = state.board[i];

        var liNumber = document.createElement('li');
        liNumber.textContent = currentNumber;
        liNumber.classList.add('number')

        liNumber.addEventListener('click', handleNumberClick);

        if (isNumberInGame(currentNumber)) {
            liNumber.classList.add('selected-number');
        }

        ulNumbers.appendChild(liNumber);
    }

    divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event) {
    var value = Number (event.currentTarget.textContent);

    
    if (isNumberInGame(value)) {
        removeNumberFromGame(value);
    } else {
        addNumberToGame(value);
    }

    console.log(state.currentGame);
    render();
}

function renderButtons() {
    var divButtons = document.querySelector('#megasena-buttons');
    divButtons.innerHTML = '';

    var buttonNewGame = createNewGameButton();
    var buttonRandomGame = createRandomGameButton();
    var buttonSaveGame = createSaveGameButton();

    divButtons.appendChild(buttonNewGame);
    divButtons.appendChild(buttonRandomGame);
    divButtons.appendChild(buttonSaveGame);


}

function createSaveGameButton() {
    var button = document.createElement('button');
    button.textContent = 'Salvar jogo';
    button.disabled = isGameComplete();

    button.addEventListener('click', saveGame);

    return button;
}

function createRandomGameButton() {
    var button = document.createElement('button');
    button.textContent = 'Jogo aleatorio';

    button.addEventListener('click', randomGame);

    return button;
}

function createNewGameButton() {
    var button = document.createElement('button');
    button.textContent = 'Novo jogo';

    button.addEventListener('click', newGame);

    return button;
}

function renderSaveGames() {}

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

function saveGame () {
    if (!isGameComplete()) {
        console.error('O jogo não esta completo!');
        return;
    }
    state.saveGames.push(state.currentGame);
    newGame();

    console.log(state.saveGames);
}

function isGameComplete() {
    return state.currentGame.length === 6;
}

    function resetGame() {
        state.currentGame = [];
    }

function randomGame() {
    resetGame();


    while (!isGameComplete()) {
    var randomNumber = Math.ceil(Math.random() * 60);
    addNumberToGame(randomNumber)
    }
    console.log(state.currentGame);
    render();
}

start();

