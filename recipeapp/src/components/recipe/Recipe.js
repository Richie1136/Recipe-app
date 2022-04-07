import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { DetailWrapper } from '../../DetailWrapper'
import { Button } from '../../Button'
import { Info } from '../../Info'

const Recipe = () => {

  const [recipeDetails, setRecipeDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')


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
    <DetailWrapper>
      <div>
        <h2 style={{ 'marginBottom': '10px' }}>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title}></img>
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }} style={{ 'width': '50%', 'marginTop': '15px' }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {recipeDetails.extendedIngredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>{ingredient.original}</li>
              )
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

export default Recipe