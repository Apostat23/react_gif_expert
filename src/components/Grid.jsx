import { useState, useEffect } from 'react'
import { request } from '../helpers/request'
import { useFetchItems } from '../hooks/useFetchItems'
import { Item } from './Item' 

export const Grid = ({subject}) => {
  //const [items, setItems] = useState([])
  const [errors, setErrors] = useState(null)
  const {items, loading} = useFetchItems(subject)
  
  return (
    <>
      <h3> {subject} </h3>
      {loading && <p>Loading...</p>}
      
      <div className='grid'>
        {items.length > 0 && items.map(item => (<Item key={item.id} item={item}/>))}
      </div>
      {errors && <span> Errors: {errors} </span>}
    </>
  )
}
