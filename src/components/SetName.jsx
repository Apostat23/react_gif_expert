import { useState } from 'react'

export const SetName = ({setName}) => {
  const [text, setText] = useState('')
  const inputHandler = (input) => setText(input.target.value)
  const submitHandler = (event) => {
    event.preventDefault()
    setName(text)
    setText('')
  }
  return (
    <form onSubmit={submitHandler}>
      <input type='text' text={text} onChange={inputHandler} ></input>
    </form>
  )
}
