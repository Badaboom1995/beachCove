import { colors } from 'shared/styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`
type ButtonProps = { active?: Boolean }
export const Button = styled.button<ButtonProps>`
  width: 50%;
  padding: 15px;
  text-align: center;
  background-color: ${props => (props.active ? colors.primary : '#fff')};
  border: ${props => (props.active ? '0px' : '1px')} solid #dfe5ec;
  color: ${props => (props.active ? '#FFF' : colors.black)};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${props => !props.active && '#f1fcff'};
  }
`
