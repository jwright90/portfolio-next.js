import { Square } from './Square'
import { ScoreCard } from './ScoreCard'
import styles from '../../styles/tictactoe/TicTacToe.module.scss'

const Board = ({ board, xScore, oScore, ties, handleSquareClick }) => {

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
      <div className={styles.boardRow}>
        <ScoreCard text={'x score'} value={xScore} />
        <ScoreCard text={'ties'} value={ties} />
        <ScoreCard text={'o score'} value={oScore} />
      </div>
    </div>
  )
};

export default Board