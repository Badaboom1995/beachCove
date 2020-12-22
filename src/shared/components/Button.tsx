import React from 'react'
import styled from 'styled-components'
import { colors } from 'shared/colors'

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
