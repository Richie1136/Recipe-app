import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../home/Home'
import Food from '../food/Food'
import Searched from '../searched/Searched'
import Recipe from '../recipe/Recipe'
import { AnimatePresence } from 'framer-motion'

const Navigation = () => {

  const location = useLocation()


  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/food/:type' element={<Food />} />
        <Route path='/searched/:search' element={<Searched />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Navigation