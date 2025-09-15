const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

let score = 0;
let tiles = [];

function initializeGame(){
    tiles = [];
    board.innerHTML = '';
    
    for (let i= 0; i < 16; i++){
        let tile = document.createElement("div");
        tile.classList.add("tile");

        tile.dataset.value = 0;
        tiles.push(tile);
        board.appendChild(tile);
    }

    addRandomTile();
    updateBoard();
}

function addRandomTile(){
    const emptyTiles = tiles.filter(tile => tile.dataset.value == 0);

    if (emptyTiles.length == 0) return;

    const randomTile = emptyTiles(Math.floor(Math.random() * emptyTiles.length))
    randomTile.dataset.value = Math.random() < 0.9 ? 2 : 4;
}

function updateBoard(){
    tiles.forEach(tile => {
        const value = parseInt(tile.dataset.value);
        tile.textContent = value > 0 ? value : '';
        tile.className = 'tile';
        if (value > 0) tile.classList.add(`tile-${value}`)
    })

    scoreDisplay.textContent = score;
}

initializeGame();
restartButton.addEventListener("click", initializeGame);