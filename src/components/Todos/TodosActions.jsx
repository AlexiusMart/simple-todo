import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import { Button } from '../UI/Button'

export const TodosActions = ({ resetTodos, deleteCompletedTodos }) => {
  return (
    <>
      <Button onClick={resetTodos} title='Reset Todos'>
        <RiRefreshLine />
      </Button>
      <Button onClick={deleteCompletedTodos} title='Clear Complited Todos'>
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}
