import { useState, useEffect } from 'react'
import { Item } from './Item'

export const Grid = ({subject}) => {
  const [items, setItems] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    const request  = async() => {
      try{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (subject)}&limit=9&api_key=lHHwNJKzpGjwI58XwybGXMAlNY8P7oMl`
        const response = await fetch(url)
        const {data} = await response.json()
        const images = data.map( image => {
          return { id: image.id, title: image.title, url: image.images?.downsized_medium.url }
        })
        setItems(images)
      } catch(error) { setErrors(error.messages)}
     }
     request()
  }, [subject])
  
  return (
    <>
      <h3> {subject} </h3>
      <div className='grid'>
        {items.length > 0 && items.map(item => (<Item key={item.id} item={item}/>))}
      </div>
      {errors && <span> Errors: {errors} </span>}
    </>
  )
}
