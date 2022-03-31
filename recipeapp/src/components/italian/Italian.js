import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

const Italian = () => {

  const [italian, setItalian] = useState([])

  const KEY = process.env.REACT_APP_FOOD_API_KEY

  const getItalian = useCallback(async () => {

    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=5&tags=italian`)
    const data = await api.json()
    setItalian(data.recipes)
  }, [KEY])

  useEffect(() => {
    getItalian()
  }, [getItalian])
  return (
    <Grid>
      {italian.map((item) => {
        return (
          <Card key={item.id}>
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.title} />
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

export default Italian