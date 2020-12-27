import Slider from 'features/Slider'
import React from 'react'
import { MainTitle } from 'shared/typography'
import { Wrapper, SliderBlock, TextBlock, TitleBlock, Subtitle, List, ListItem } from './styled'

function Attractions(props) {
  return (
    <Wrapper>
      <TextBlock>
        <TitleBlock>
          <MainTitle>Area Attractions</MainTitle>
          <Subtitle>Downtown Boothbay Harbor - 1 mile away</Subtitle>
        </TitleBlock>
        <List>
          <ListItem>- Boat trips to islands, lighthouses, whales, seals and puffins</ListItem>
          <ListItem>- Shopping and Galleries</ListItem>
          <ListItem>- Public library</ListItem>
          <ListItem>- Ocean fishing day trips</ListItem>
          <ListItem>- Maine Aquarium</ListItem>
          <ListItem>- Railway Village</ListItem>
        </List>
      </TextBlock>
      <SliderBlock>
        <Slider inner arrows height="400px" content={props.content} />
      </SliderBlock>
    </Wrapper>
  )
}
export default Attractions
