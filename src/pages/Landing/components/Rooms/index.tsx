import React from 'react'
import { MainTitle, RegularText } from 'shared/typography'
import { Wrapper, TitleBlock, MainBlock, Include, IncludeTitle, RoomsSlider } from './styled'
import Slider from 'features/Slider'
import IncludeList from 'shared/components/IncludeList'
import { useSelector } from 'react-redux'

function Rooms() {
  const rooms = useSelector((state: any) => state.app.rooms)
  const roomsUrls = Object.keys(rooms).reduce((accum, id): any => [...accum, ...rooms[id].urls], [])
  const isColumn = window.innerWidth > 1023 ? true : false
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
          <IncludeList column={isColumn} />
        </Include>
        <RoomsSlider>
          <Slider inner arrows height="340px" content={roomsUrls} />
        </RoomsSlider>
      </MainBlock>
    </Wrapper>
  )
}
export default Rooms
