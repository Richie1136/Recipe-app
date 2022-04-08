import React from 'react'
import Trending from '../trending/Trending'
import Veggie from '../veggie/Veggie'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Trending />
      <Veggie />
    </motion.div>
  )
}

export default Home