import React from 'react'
import { MainTitle, RegularText } from 'shared/typography'
import {
  Wrapper,
  TitleBlock,
  MainBlock,
  Include,
  IncludeTitle,
  // IncludeList,
  // IncludeItem,
  RoomsSlider,
} from './styled'
import Slider from 'features/Slider'
import IncludeList from 'shared/components/IncludeList'
// import ac from 'shared/assets/ac.svg'
// import coffe from 'shared/assets/coffee-cup.svg'
// import fridge from 'shared/assets/fridge.svg'
// import heater from 'shared/assets/heater.svg'
// import microwave from 'shared/assets/microwave.svg'
// import panorama from 'shared/assets/panorama.svg'
// import tv from 'shared/assets/television.svg'

function Rooms() {
  return (
    <Wrapper>
      <TitleBlock>
        <MainTitle>Rooms </MainTitle>
        <RegularText white>
          Our guests will enjoy comfortable rooms that have been recently renovated in a waterfront
          atmosphere along with many onsite amenities.
        </RegularText>
      </TitleBlock>
      <MainBlock>
        <Include>
          <IncludeTitle>All rooms include:</IncludeTitle>
          <IncludeList column />
        </Include>
        <RoomsSlider>
          <Slider inner arrows height="340px" />
        </RoomsSlider>
      </MainBlock>
    </Wrapper>
  )
}
export default Rooms
