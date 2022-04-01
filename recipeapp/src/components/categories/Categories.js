import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { List } from '../../List'

const Categories = () => {
  return (
    <>
      <List>
        <StyleLink to='/'>
          <h4 style={{ 'marginRight': '10px', 'marginTop': '15px' }}>Home</h4>
        </StyleLink>
        <StyleLink to={'/food/Italian'}>
          <FaPizzaSlice />
          <h4 style={{ 'marginRight': '10px' }}>Italian</h4>
        </StyleLink>
        <StyleLink to={'/food/American'}>
          <FaHamburger />
          <h4 style={{ 'marginRight': '10px' }}>American</h4>
        </StyleLink>
        <StyleLink to={'/food/Thai'}>
          <GiNoodles />
          <h4 style={{ 'marginRight': '10px' }}>Thai</h4>
        </StyleLink>
        <StyleLink to={'/food/Japanese'}>
          <GiChopsticks />
          <h4 style={{ 'marginRight': '10px' }}>Japanese</h4>
        </StyleLink>
      </List>
    </>
  )
}

const StyleLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%
`

export default Categories