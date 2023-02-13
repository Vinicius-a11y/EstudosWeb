var state = {board: [], currentGame: [], saveGames: []};
function start() {
    addNumberToGame(1);
    addNumberToGame(2);
    addNumberToGame(3);
    addNumberToGame(4);
    addNumberToGame(5);
    

    console.log(state.currentGame);
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

start();