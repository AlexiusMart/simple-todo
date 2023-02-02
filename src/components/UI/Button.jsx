import styles from './Button.module.css'

export const Button = ({ onClick, children, title, disabled = false }) => {
  return (
    <>
      <button className={styles.button} onClick={onClick} title={title}>
        {children}
      </button>
    </>
  )
}
