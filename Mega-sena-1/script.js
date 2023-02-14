var state = {board: [], currentGame: [], saveGames: []};
function start() {
    addNumberToGame(1);
    addNumberToGame(2);
    addNumberToGame(3);
    addNumberToGame(4);
    addNumberToGame(5);
    
    saveGame();

    console.log(state.currentGame);
    console.log(state.savedGame);
}

function addNumberToGame(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 68) {
        console.error('Numero invalido' , numberToAdd);
        return;
    }

    if (state.currentGame.length >= 6){
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
   // if (state.currentGame.includes(numberToCheck)){
      //return true;
  //}

  //  return false;

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
start();