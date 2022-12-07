import React, { useState } from "react";
import Board from "../../components/tictactoe/Board";
import { calculateWinner } from '../../helpers/tictactoe_helpers';
import styles from '../../styles/tictactoe/TicTacToe.module.scss'

const TicTacToe = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const isDraw = () => {
    if (!board.includes(null) && winner === null) {
      return true;
    }
  }

  const message = winner
    ? `Winner is ${winner}`
    : isDraw() ? "Draw"
      : `Next player is ${isXNext ? 'X' : 'O'}`

  console.log('Winner:' + winner);
  console.log('Board:' + board);

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

  return (
    <div className={styles.container}>
      <div className={styles.notifications}>
        <h1>Tic Tac Toe</h1>
        <h2>{message}</h2>
        <h2>{draw}</h2>
      </div>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default TicTacToe;