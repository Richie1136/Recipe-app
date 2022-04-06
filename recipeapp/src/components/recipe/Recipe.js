import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Recipe = () => {

  const [recipeDetails, setRecipeDetails] = useState({})

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  let params = useParams()

  const getDetails = useCallback(async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${KEY}`)
    const data = await api.json()
    setRecipeDetails(data)
  }, [KEY, params.id])

  useEffect(() => {
    getDetails(params.id)
  }, [getDetails, params.id])


  return (
    <div>
      <h2 style={{ 'marginBottom': '10px' }}>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title}></img>
      <p style={{ 'width': '50%', 'marginTop': '15px' }}>{recipeDetails.instructions}</p>
    </div>
  )
}

export default Recipe