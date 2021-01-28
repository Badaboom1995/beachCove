import React from 'react'
import styled from 'styled-components'
import { colors } from 'shared/colors'
import { darken, lighten } from 'polished'

const Button = styled.a`
  background: ${colors.primary};
  text-decoration: none;
  position: relative;
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
  text-align: center;
`

function Card(props) {
  return (
    <Wrapper>
      <Button href="https://apps.gracesoft.com/pms/onlinebookingV2/RoomDetails.aspx?PropertyId=314&PMSFolder=PMS5">
        {props.children}
      </Button>
    </Wrapper>
  )
}
export default Card
