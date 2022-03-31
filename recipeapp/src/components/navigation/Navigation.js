import { Routes, Route } from 'react-router-dom'
import Italian from '../italian/Italian'
import American from '../american/American'
import Thai from '../thai/Thai'
import Japanese from '../japanese/Japanese'
import Home from '../home/Home'

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/italian' element={<Italian />} />
      <Route path='/american' element={<American />} />
      <Route path='/thai' element={<Thai />} />
      <Route path='/japanese' element={<Japanese />} />
    </Routes>
  )
}

export default Navigation