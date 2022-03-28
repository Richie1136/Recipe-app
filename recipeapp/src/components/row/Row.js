import { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

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
          gap: '5rem'
        }}>
          {recipe.map((rec) => {
            return (
              <SplideSlide key={rec.id}>
                <Card>
                  <p style={{ 'textAlign': 'center', 'marginBottom': '15px' }}>{rec.title}</p>
                  <img src={rec.image} alt={rec.title} />
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;

img {
  border-radius: 2rem;
}
`;

export default Row