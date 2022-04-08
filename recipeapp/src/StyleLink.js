import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyleLink = styled(NavLink)`
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