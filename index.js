//TODO:
//Make winning move stop game

let playerHuman, playerComputer;

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
                displayController.updateBoard(selectedBox, playerHuman);
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
                displayController.updateBoard(selectedBox, playerHuman);
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
                displayController.updateBoard(selectedBox, playerHuman);
                return;
            }
        }
    };

    return { boardControl, boardTop, boardMid, boardBot };
})();

const gameLogic = (() => {
    const playerComputerMoves = () => {
        function rndIntForBoard() {
            return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        }

        const computerMove = (() => {
            let boardMove = rndIntForBoard();
            let boardSelection = rndIntForBoard();
            let boardUpdaterIndex;
            let guard = true;
            do {
                switch (boardSelection) {
                    case 0:
                        if (
                            gameBoard.boardTop[boardMove] === "X" ||
                            gameBoard.boardTop[boardMove] === "O"
                        ) {
                            boardMove = rndIntForBoard();
                            boardSelection = rndIntForBoard();
                        } else {
                            gameBoard.boardTop.splice(boardMove, 1, playerComputer.playerSelection);
                            displayController.updateBoard(boardMove, playerComputer);
                            guard = false;
                            break;
                        }
                    case 1:
                        if (
                            gameBoard.boardMid[boardMove] === "X" ||
                            gameBoard.boardMid[boardMove] === "O"
                        ) {
                            boardMove = rndIntForBoard();
                            boardSelection = rndIntForBoard();
                        } else {
                            gameBoard.boardMid.splice(boardMove, 1, playerComputer.playerSelection);
                            if (boardMove === 0) {
                                boardUpdaterIndex = 3;
                            }
                            if (boardMove === 1) {
                                boardUpdaterIndex = 4;
                            }
                            if (boardMove === 2) {
                                boardUpdaterIndex = 5;
                            }
                            displayController.updateBoard(boardUpdaterIndex, playerComputer);
                            guard = false;
                            break;
                        }
                    case 2:
                        if (
                            gameBoard.boardBot[boardMove] === "X" ||
                            gameBoard.boardBot[boardMove] === "O"
                        ) {
                            boardMove = rndIntForBoard();
                            boardSelection = rndIntForBoard();
                        } else {
                            gameBoard.boardBot.splice(boardMove, 1, playerComputer.playerSelection);
                            if (boardMove === 0) {
                                boardUpdaterIndex = 6;
                            }
                            if (boardMove === 1) {
                                boardUpdaterIndex = 7;
                            }
                            if (boardMove === 2) {
                                boardUpdaterIndex = 8;
                            }
                            displayController.updateBoard(boardUpdaterIndex, playerComputer);
                            guard = false;
                            break;
                        }
                }
            } while (guard);
        })();
    };

    const winChecker = () => {
        const topBoardX = gameBoard.boardTop.every((index) => {
            if (index === "X") {
                return true;
            }
        });
        const midBoardX = gameBoard.boardMid.every((index) => {
            if (index === "X") {
                return true;
            }
        });
        const botBoardX = gameBoard.boardBot.every((index) => {
            if (index === "X") {
                return true;
            }
        });
        if (topBoardX || midBoardX || botBoardX) {
            console.log("Win X");
            winner("X");
        }

        const topBoardO = gameBoard.boardTop.every((index) => {
            if (index === "O") {
                return true;
            }
        });
        const midBoardO = gameBoard.boardMid.every((index) => {
            if (index === "O") {
                return true;
            }
        });
        const botBoardO = gameBoard.boardBot.every((index) => {
            if (index === "O") {
                return true;
            }
        });
        if (topBoardO || midBoardO || botBoardO) {
            console.log("Win O");
            winner("O");
        }

        const boards = gameBoard.boardTop.concat(gameBoard.boardMid, gameBoard.boardBot);
        if (boards[0] === "X" && boards[3] === "X" && boards[6] === "X") {
            winner("X");
            return console.log("Win X");
        }
        if (boards[1] === "X" && boards[4] === "X" && boards[7] === "X") {
            winner("X");
            return console.log("Win X");
        }
        if (boards[2] === "X" && boards[5] === "X" && boards[8] === "X") {
            winner("X");
            return console.log("Win X");
        }

        if (boards[0] === "O" && boards[3] === "O" && boards[6] === "O") {
            winner("O");
            return console.log("Win O");
        }
        if (boards[1] === "O" && boards[4] === "O" && boards[7] === "O") {
            winner("O");
            return console.log("Win O");
        }
        if (boards[2] === "O" && boards[5] === "O" && boards[8] === "O") {
            winner("O");
            return console.log("Win O");
        }
        if (boards[0] === "X" && boards[4] === "X" && boards[8] === "X") {
            winner("X");
            return console.log("Win X");
        }
        if (boards[2] === "X" && boards[4] === "X" && boards[6] === "X") {
            winner("X");
            return console.log("Win X");
        }
        if (boards[0] === "O" && boards[4] === "O" && boards[8] === "O") {
            winner("O");
            return console.log("Win O");
        }
        if (boards[2] === "O" && boards[4] === "O" && boards[6] === "O") {
            winner("O");
            return console.log("Win O");
        }
    };

    const btnEvent = (() => {
        const playerSelectionDiv = document.querySelector(".player-selection");
        const btnX = document.getElementById("X").addEventListener("click", () => {
            playerHuman = player("X");
            playerComputer = player("O");
            playerSelectionDiv.style.visibility = "hidden";
        });
        const btnO = document.getElementById("O").addEventListener("click", () => {
            playerHuman = player("O");
            playerComputer = player("X");
            playerSelectionDiv.style.visibility = "hidden";
        });
        const btnRestart = document.getElementById("restart").addEventListener("click", () => {
            location.reload();
        });
    })();

    const winner = (player) => {
        const winnerDiv = document.querySelector("#winner");
        winnerDiv.style.visibility = "visible";
        winnerDiv.innerText = `The winner is: ${player}`;
    };
    return { winChecker, playerComputerMoves };
})();

const displayController = (() => {
    const updateBoard = (position, player) => {
        const div = document.querySelector(`[data-array-index="${position}"]`);
        div.textContent = player.playerSelection;
        gameLogic.winChecker();
    };

    return { updateBoard };
})();

const player = (gameSelection) => {
    const playerSelection = gameSelection;
    let playerPoints = 0;
    return { playerSelection, playerPoints };
};
