import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { CardWrapper } from '../../CardWrapper'
import { Grid } from '../../Grid'

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
    <Grid animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {food?.map((item) => {
        return (
          <CardWrapper key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <h4>{item.title}</h4>
              <img src={item.image} alt={item.title} />
            </Link>
          </CardWrapper>
        )
      })}
    </Grid>
  )
}

export default Food