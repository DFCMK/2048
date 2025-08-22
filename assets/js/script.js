const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

let score = 0;
let tiles = [];

function initializeGame(){
    tiles = [];
    
    for (let i= 0; i < 16; i++){
        let tile = document.createElement("div");
        tile.classList.add("tile");

        tile.dataset.value = 0;
        tiles.push(tile);
        board.appendChild(tile);
    }
}

initializeGame();
restartButton.addEventListener("click", initializeGame);