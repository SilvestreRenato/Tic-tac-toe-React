import styles from "./styles.module.css"

export default function Square({ value, onSquareClick }) {
  return (
    <button className={styles.wrapper} onClick={onSquareClick}>{value}</button>
  )
}