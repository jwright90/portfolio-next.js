import styles from '../../styles/tictactoe/TicTacToe.module.scss'

export const ScoreCard = ({ text, value }) => {
  return (
    <div className={styles.scorecard}>
      <div className={styles.scorecardText}>
        {text}
      </div>
      <div className={styles.scorecardScore}>
        {value}
      </div>
    </div>
  )
}
