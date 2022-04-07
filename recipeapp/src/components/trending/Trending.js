import { useState, useEffect, useCallback } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Wrapper } from '../../Wrapper'
import { Gradient } from '../../Graident'
import { Card } from '../../Card'
import { Link } from 'react-router-dom'

const Row = ({ title }) => {
  const [recipe, setRecipe] = useState([])
  const KEY = process.env.REACT_APP_FOOD_API_KEY

  const searchRandom = useCallback(async () => {

    const check = localStorage.getItem('random')

    if (check) {
      setRecipe(JSON.parse(check))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=5`)
      const data = await api.json()
      localStorage.setItem('random', JSON.stringify(data.recipes))
      setRecipe(data.recipes)
    }
  }, [KEY])

  useEffect(() => {
    searchRandom()
  }, [searchRandom])


  return (
    <div className='row'>
      <Wrapper>
        <h3>Trending</h3>
        <Splide options={{
          perPage: 5,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '80px'
        }}>
          {recipe.map((rec) => {
            return (
              <SplideSlide key={rec.id}>
                <Card>
                  <Link to={`/recipe/${rec.id}`}>
                    <p>{rec.title}</p>
                    <img src={rec.image} alt={rec.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

export default Row