import React from 'react'
import styled from 'styled-components'
import { colors } from 'shared/colors'
import { darken, lighten } from 'polished'

const Button = styled.button`
  background: ${colors.primary};
  min-width: 110px;
  border: none;
  font-size: 16px;
  padding: 7px 20px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Lato';
  cursor: pointer;
  transition: 0.1s all ease;
  &:hover {
    background-color: ${lighten(0.05, colors.primary)};
  }
  &:active {
    background-color: ${lighten(0.15, colors.primary)};
  }
  &:focus {
    outline: none;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

function Card(props) {
  return (
    <Wrapper>
      <Button>{props.children}</Button>
    </Wrapper>
  )
}
export default Card
