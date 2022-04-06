import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

const Food = () => {
  const [food, setFood] = useState([])

  let params = useParams()

  const KEY = process.env.REACT_APP_FOOD_API_KEY

  const getFood = useCallback(async (name) => {

    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&cuisine=${name}`)
    const data = await api.json()
    setFood(data.results)
  }, [KEY])

  useEffect(() => {
    getFood(params.type)
  }, [getFood, params.type])
  return (
    <Grid>
      {food.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <h4>{item.title}</h4>
              <img src={item.image} alt={item.title} />
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`

const Card = styled.div`
img {
  border-radius: 32px;
  width: 100%;
}
a {
  text-decoration: none;
}
h4 {
  text-align: center;
  padding: 16px;
}
`

export default Food