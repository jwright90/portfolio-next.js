import React, { useState, useEffect, useRef } from "react";
import Board from "../../components/tictactoe/Board";
import { calculateWinner } from '../../helpers/tictactoe_helpers';
import styles from '../../styles/tictactoe/TicTacToe.module.scss'

const TicTacToe = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const xCount = useRef(0);
  const oCount = useRef(0);
  const tiesCount = useRef(0);

  const winner = calculateWinner(board);

  const isDraw = () => {
    if (!board.includes(null) && winner === null) {
      return true;
    }
  }

  const newGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
  }

  const reset = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    xCount.current = 0;
    oCount.current = 0;
    tiesCount.current = 0;
  }

  const message = winner
    ? `Winner is ${winner}`
    : isDraw() ? "Draw"
      : `${isXNext ? 'X' : 'O'} Turn`

  const draw = isDraw();

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(board => {
      // Previous state
      return board.map((square, pos) => {
        //       Element, Index  
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      })
    })

    setIsXNext((prev) => !prev);

  };

  useEffect(() => {
    if (winner) {
      if (winner === 'X') {
        xCount.current = xCount.current + 1;
        newGame();
      }
      if (winner === 'O') {
        oCount.current = oCount.current + 1;
        newGame();
      }
    }

    if (!board.includes(null) && !winner) {
      tiesCount.current = tiesCount.current + 1;
      newGame();
    }
  }, [handleSquareClick])

  return (
    <div className={styles.container}>
      <div className={styles.notifications}>
        <div className={styles.message}>
          <h2>{message}</h2>
          <h2>{draw}</h2>
        </div>
      </div>
      <Board
        board={board}
        xScore={xCount.current}
        oScore={oCount.current}
        ties={tiesCount.current}
        handleSquareClick={handleSquareClick}
      />
      <button className={styles.reset} onClick={reset}>Restart Game
        <span className={styles.resetIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
          </svg>
        </span>
      </button>
    </div >
  );
};

export default TicTacToe;