import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import { List } from '../../List'
import { StyleLink } from '../../StyleLink'

const Categories = () => (
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

export default Categories