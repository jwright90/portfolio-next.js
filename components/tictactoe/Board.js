import { Square } from './Square'
import styles from '../../styles/tictactoe/TicTacToe.module.scss'

const Board = ({ board, handleSquareClick }) => {

  const renderSquare = (position) => {
    return <Square value={board[position]} onClick={() => handleSquareClick(position)} />
  };

  return (
    <div className={styles.board}>
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
};

export default Board