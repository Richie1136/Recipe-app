import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


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
          <Card key={search.id}>
            <h4>{search.title}</h4>
            <img src={search.image} alt={search.title} />
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

export default Searched