import { useState } from 'react'
import { AddSubject } from './components/AddSubject'
import { Grid } from './components/Grid'
import { SetName } from './components/SetName'

export const GifExpert = () => {
const [subjects, setSubjects] = useState([''])
const [name, setName] = useState('')
const sayHello = () => { return `Hello ${name}` }

  return (
      <>
        {name && <h3> {sayHello(name)} </h3>}
        {!name && <p> Please write your name<SetName setName={setName} /> </p>}
        <AddSubject setSubjects={setSubjects} />
        {subjects.map(subject => <Grid key={subject} subject={subject} />)}
      </>
  )
}
