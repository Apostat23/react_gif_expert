import { useState, useEffect } from 'react'
import { request } from '../helpers/request'

export const useFetchItems = (subject) => {
  const [state, setState] = useState({items: [], loading: true})
  useEffect(() => {
    request(subject)
      .then(items => setState({items: items, loading: false}))
  }, [subject])
  return state
}
