import { useState } from 'react'

export const AddSubject = ({setSubjects}) => {
  const [text, setText] = useState('')
  const inputHandler = (input) => setText(input.target.value) 
  const submitHandler = (event) => {
    event.preventDefault()
    setSubjects(subjects => [text, ...subjects])
    setText('')
  }

  return (
    <form onSubmit={submitHandler}>
      <p> Please add a subject... </p>
      <p><input type='text' value={text} onChange={inputHandler} /></p>
    </form>
  )
}
