import { useState } from 'react'

import styles from './TodoForm.module.css'

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <label>
          <input
            type='text'
            placeholder='Enter new todo'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
