import styles from './Todo.module.css'
import { RiTodoFill } from 'react-icons/ri'

export const Todo = ({ todo, i, deleteTodo }) => {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(i)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}
