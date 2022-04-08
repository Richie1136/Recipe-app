import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CardWrapper } from '../../CardWrapper'
import { Grid } from '../../Grid'


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
    <Grid>
      {getSearched.map((search) => {
        return (
          <CardWrapper key={search.id}>
            <Link to={`/recipe/${search.id}`}>
              <h4>{search.title}</h4>
              <img src={search.image} alt={search.title} />
            </Link>
          </CardWrapper>
        )
      })}
    </Grid>
  )
}

export default Searched