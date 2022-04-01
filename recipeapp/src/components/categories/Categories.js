import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { List } from '../../List'

const Categories = () => {
  return (
    <>
      <List>
        <NavLink to='/'>
          <h4>Home</h4>
        </NavLink>
        <NavLink to={'/food/Italian'}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/food/American'}>
          <FaHamburger />
          <h4>American</h4>
        </NavLink>
        <NavLink to={'/food/Thai'}>
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/food/Japanese'}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </NavLink>
      </List>
    </>
  )
}

export default Categories