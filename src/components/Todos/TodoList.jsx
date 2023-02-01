import { Todo } from './Todo'

import styles from './TodoList.module.css'

export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} i={i} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}
