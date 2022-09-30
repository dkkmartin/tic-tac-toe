const gameBoard = (() => {
    const board = ["O", "X", "X", "X", "O", "X", "X", "X", "O"];
    return { board };
})();

const displayController = (() => {
    //fills the game board with the board array
    const updateBoard = (() => {
        let i = 0;
        gameBoard.board.forEach((item) => {
            const element = document.querySelector(`[data-array-index="${i}"]`);
            element.textContent = item;
            i++;
        });
    })();
    return { updateBoard };
})();

const players = (() => {})();
