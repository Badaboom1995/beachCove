import styled from 'styled-components'
import sloth from './sloth.png'

type ButtonProps = { active?: boolean }
export const Buddy = styled.div<ButtonProps>`
  position: absolute;
  z-index: 1001;
  bottom: 30px;
  left: ${props => (props.active ? '0px' : '-70px')};
  width: 150px;
  height: 150px;
  background-image: url(${sloth});
  padding: 30px;
  background-size: cover;
  background-position: -50px 0px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
`
