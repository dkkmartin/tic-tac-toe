let playerHuman;

const gameBoard = (() => {
    const boardTop = [0, 0, 0];
    const boardMid = [0, 0, 0];
    const boardBot = [0, 0, 0];

    const boardControl = (selectedBox) => {
        if (selectedBox == 0 || selectedBox == 1 || selectedBox == 2) {
            if (boardTop[selectedBox] == "X" || boardTop[selectedBox] == "O") {
                return;
            } else {
                boardTop.splice(selectedBox, 1, playerHuman.playerSelection);
                displayController.updateBoard(selectedBox);
                return;
            }
        }
        if (selectedBox == 3 || selectedBox == 4 || selectedBox == 5) {
            let selBoxToIndex = selectedBox;
            switch (selBoxToIndex) {
                case 3:
                    selBoxToIndex = 0;
                    break;
                case 4:
                    selBoxToIndex = 1;
                    break;
                case 5:
                    selBoxToIndex = 2;
                    break;
            }

            if (boardMid[selBoxToIndex] == "X" || boardMid[selBoxToIndex] == "O") {
                return;
            } else {
                boardMid.splice(selBoxToIndex, 1, playerHuman.playerSelection);
                displayController.updateBoard(selectedBox);
                return;
            }
        }
        if (selectedBox == 6 || selectedBox == 7 || selectedBox == 8) {
            let selBoxToIndex = selectedBox;
            switch (selBoxToIndex) {
                case 6:
                    selBoxToIndex = 0;
                    break;
                case 7:
                    selBoxToIndex = 1;
                    break;
                case 8:
                    selBoxToIndex = 2;
                    break;
            }
            if (boardBot[selBoxToIndex] == "X" || boardBot[selBoxToIndex] == "O") {
                return;
            } else {
                boardBot.splice(selBoxToIndex, 1, playerHuman.playerSelection);
                displayController.updateBoard(selectedBox);
                return;
            }
        }
    };

    return { boardControl, boardTop, boardMid, boardBot };
})();

const gameLogic = (() => {
    const winConditions = () => {};

    const winChecker = () => {
        //TODO:
        //Check rest of arrays
        //Figure a way to check every array with a loop
        const isWon = gameBoard.boardTop.every((index) => {
            if (index === "X") {
                return true;
            }
        });
        return console.log(isWon);
    };

    const btnEvent = (() => {
        const btnX = document.getElementById("X").addEventListener("click", () => {
            playerHuman = player("X");
        });
        const btnO = document.getElementById("O").addEventListener("click", () => {
            playerHuman = player("O");
        });
    })();
    return { winChecker, winConditions };
})();

const displayController = (() => {
    //fills the game board with the board array
    const updateBoard = (position) => {
        const div = document.querySelector(`[data-array-index="${position}"]`);
        div.textContent = playerHuman.playerSelection;
        gameLogic.winChecker();
    };

    return { updateBoard };
})();

const player = (gameSelection) => {
    const playerSelection = gameSelection;
    let playerPoints = 0;
    return { playerSelection, playerPoints };
};
