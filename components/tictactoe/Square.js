import styles from '../../styles/tictactoe/TicTacToe.module.scss'

export const Square = ({ value, onClick }) => {
  return (
    <button
      className={styles.square}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  )
}
