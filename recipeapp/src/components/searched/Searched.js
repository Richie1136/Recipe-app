import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

const Searched = () => {
  const [getSearched, setGetSearched] = useState([])

  let params = useParams()

  const KEY = process.env.REACT_APP_FOOD_API_KEY

  const getSearchedItem = useCallback(async (name) => {


    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&query=${name}`)
    const data = await api.json()
    setGetSearched(data.results)
  }, [KEY])

  useEffect(() => {
    getSearchedItem(params.search)
  }, [getSearchedItem, params.search])

  return (
    <div>
      <h2>Searched</h2>
      <h4>{getSearched}</h4>
    </div>
  )
}

export default Searched