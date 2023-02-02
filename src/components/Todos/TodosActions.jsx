import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import { Button } from '../UI/Button'
import styles from './TodosActions.module.css'

export const TodosActions = ({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist
}) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodos} title='Reset Todos'>
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodos}
        title='Clear Complited Todos'
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}
