import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Food from '../food/Food'
import Searched from '../searched/Searched'

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/food/:type' element={<Food />} />
      <Route path='/searched/:search' element={<Searched />} />
    </Routes>
  )
}

export default Navigation