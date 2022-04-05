import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { List } from '../../List'

const Categories = () => {
  return (
    <>
      <List>
        <StyleLink to='/'>
          <AiFillHome />
          <h4>Home</h4>
        </StyleLink>
        <StyleLink to={'/food/Italian'}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </StyleLink>
        <StyleLink to={'/food/American'}>
          <FaHamburger />
          <h4>American</h4>
        </StyleLink>
        <StyleLink to={'/food/Thai'}>
          <GiNoodles />
          <h4>Thai</h4>
        </StyleLink>
        <StyleLink to={'/food/Japanese'}>
          <GiChopsticks />
          <h4>Japanese</h4>
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
border-radius: 50%;
margin-right: 32px;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 96px;
height: 96px;
cursor: pointer;
transform: scale(0.8);

h4 {
  color: white;
  font-size: 14px;
  margin-top: 5px;
}

svg {
  color: white;
  font-size: 24px;
}

&.active {
  background: linear-gradient(to right, #f27121, #e94057)

  svg {
    color: white;
  }
  h4 {
    color: white;
  }
}

`

export default Categories