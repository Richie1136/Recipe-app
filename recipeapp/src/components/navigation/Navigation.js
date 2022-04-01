import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Food from '../food/Food'

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/food/:type' element={<Food />} />
    </Routes>
  )
}

export default Navigation