import { useState } from 'react'
import { AddSubject } from './components/AddSubject'
import { Grid } from './components/Grid'

export const GifExpert = ({name}) => {
const [subjects, setSubjects] = useState([''])
const sayHello = () => { return `Hello ${name}` }

  return (
      <>
      <h1> {sayHello(name)} </h1>
      <AddSubject setSubjects={setSubjects}/>
      {subjects.map(subject => <Grid key={subject} subject={subject}/>)}
      </>
  )
}
