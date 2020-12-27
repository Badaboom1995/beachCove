import React from 'react'
import styled from 'styled-components'
import ac from 'shared/assets/ac.svg'
import coffe from 'shared/assets/coffee-cup.svg'
import fridge from 'shared/assets/fridge.svg'
import heater from 'shared/assets/heater.svg'
import microwave from 'shared/assets/microwave.svg'
import panorama from 'shared/assets/panorama.svg'
import tv from 'shared/assets/television.svg'
import water from 'shared/assets/water.svg'

type IncludeListProps = {
  column?: Boolean
}
const List = styled.ul<IncludeListProps>`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => !props.column && 'space-around'};
  li {
    width: ${props => !props.column && '25%'};
    text-align: center;
    @media screen and (max-width: 768px) {
      width: auto;
    }
  }
`
type IncludeItemProps = {
  icon?: any
}
const IncludeItem = styled.li<IncludeItemProps>`
  font-family: 'Lato';
  list-style: none;
  padding: 5px 0;
  display: flex;
  color: #fff;
  font-weight: normal;
  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${props => props.icon});
    background-size: contain;
    background-position: center;
    margin-right: 10px;
  }
`

function IncludeList({ column }: IncludeListProps) {
  return (
    <List column={column}>
      <IncludeItem icon={panorama}>Private balcony </IncludeItem>
      <IncludeItem icon={water}>Water view </IncludeItem>
      <IncludeItem icon={ac}>Air conditioning</IncludeItem>
      <IncludeItem icon={heater}>Electric heat</IncludeItem>
      <IncludeItem icon={fridge}>Mini fridge</IncludeItem>
      <IncludeItem icon={microwave}>Microwave oven</IncludeItem>
      <IncludeItem icon={coffe}>Coffee maker</IncludeItem>
      <IncludeItem icon={tv}>Cable television</IncludeItem>
    </List>
  )
}
export default IncludeList
