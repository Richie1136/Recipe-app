import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Food from '../food/Food'
import Searched from '../searched/Searched'
import Recipe from '../recipe/Recipe'

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipe/:id' element={<Recipe />} />
      <Route path='/food/:type' element={<Food />} />
      <Route path='/searched/:search' element={<Searched />} />
    </Routes>
  )
}

export default Navigation