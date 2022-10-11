let playerHuman;

const gameBoard = (() => {
    const board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const boardControl = (selectedBox) => {
        if (board[selectedBox] == selectedBox) {
            board.splice(selectedBox, 1, playerHuman.playerSelection);
            displayController.updateBoard();
        }
    };

    return { board, boardControl };
})();

const gameLogic = (() => {
    const btnEvent = (() => {
        const btnX = document
            .getElementById("X")
            .addEventListener("click", () => {
                playerHuman = player("X");
            });
        const btnO = document
            .getElementById("O")
            .addEventListener("click", () => {
                playerHuman = player("O");
            });
    })();
})();

const displayController = (() => {
    //fills the game board with the board array
    const updateBoard = () => {
        let i = 0;
        gameBoard.board.forEach((item) => {
            if (
                item == 0 ||
                item == 1 ||
                item == 2 ||
                item == 3 ||
                item == 4 ||
                item == 5 ||
                item == 6 ||
                item == 7 ||
                item == 8
            ) {
                i++;
                return;
            }
            const element = document.querySelector(`[data-array-index="${i}"]`);
            element.textContent = item;
            i++;
        });
    };

    return { updateBoard };
})();

const player = (gameSelection) => {
    const playerSelection = gameSelection;
    let playerPoints = 0;
    return { playerSelection, playerPoints };
};
