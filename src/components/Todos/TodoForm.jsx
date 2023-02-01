import { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <>
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
    </>
  )
}
