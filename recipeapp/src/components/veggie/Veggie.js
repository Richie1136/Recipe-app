import { useState, useEffect, useCallback } from 'react'
import { Wrapper } from '../../Wrapper'
import { Gradient } from '../../Graident'
import { Card } from '../../Card'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

const Veggie = () => {

  const [veggie, setVeggie] = useState([])
  const KEY = process.env.REACT_APP_FOOD_API_KEY

  const getVeggie = useCallback(async () => {

    const check = localStorage.getItem('veggie')

    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=5&tags=vegetarian`)
      const data = await api.json()
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes)
    }
  }, [KEY])

  useEffect(() => {
    getVeggie()
  }, [getVeggie])

  return (
    <div className='row'>
      <Wrapper>
        <h3>Veggie Picks</h3>
        <Splide options={{
          perPage: 5,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '80px'
        }}>
          {veggie.map((rec) => {
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

export default Veggie