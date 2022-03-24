import { useState, useEffect } from 'react'

const Row = ({ title }) => {
  const [recipe, setRecipe] = useState([])
  const KEY = process.env.REACT_APP_FOOD_API_KEY

  const searchRandom = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=5`)
    const data = await api.json()
    console.log(data)
    setRecipe(data.recipes)
  }

  useEffect(() => {
    searchRandom()
  }, [])


  return (
    <div className='row'>
      <h2>{title}</h2>
      {recipe.map((rec) => {
        return (
          <div key={rec.id}>

            <p>{rec.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Row