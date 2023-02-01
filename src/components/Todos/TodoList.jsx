import { Todo } from './Todo'


export const TodoList = ({ todos }) => {
  return todos.map((todo, i) => <Todo key={i} todo={todo} />)
}
