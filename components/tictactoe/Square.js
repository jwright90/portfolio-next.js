import styles from '../../styles/tictactoe/TicTacToe.module.scss'

export const Square = ({ value, onClick }) => {
  return (
    <button
      className={styles.square}
      onClick={onClick}
    >
      <div className={value == 'X' ? styles.x : styles.o}>
        {value}
      </div>
    </button>
  )
}
