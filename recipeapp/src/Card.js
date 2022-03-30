import styled from 'styled-components'


export const Card = styled.div`
min-height: 400px;
border-radius: 32px;
overflow: hidden;

img {
  border-radius: 32px;
  position: absoulte;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p {
  display: flex;
  position: absolute;
  height: 40%;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: black;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
}

`;