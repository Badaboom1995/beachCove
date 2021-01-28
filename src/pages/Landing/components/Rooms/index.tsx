import React from 'react'
import { MainTitle, RegularText } from 'shared/typography'
import { Wrapper, TitleBlock, MainBlock, Include, IncludeTitle, RoomsSlider } from './styled'
// import Slider from 'features/Slider'
import Slider from 'react-slick'
import IncludeList from 'shared/components/IncludeList'
import { useSelector } from 'react-redux'
import RoomCard from 'features/RoomCard'
import { StyledArrow } from 'features/Slider/styled'

function Rooms(props) {
  const rooms = useSelector((state: any) => state.app.rooms)
  const folders = Object.keys(rooms)
  const roomsUrls = Object.keys(rooms).reduce((accum, id): any => [...accum, ...rooms[id].urls], [])
  const isColumn = window.innerWidth > 1023 ? true : false

  function NextArrow(props) {
    const { className, onClick } = props
    return <StyledArrow className={className} onClick={onClick} />
  }

  function PrevArrow(props) {
    const { className, onClick } = props
    return <StyledArrow className={className} onClick={onClick} prev />
  }
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Wrapper>
      <TitleBlock>
        <MainTitle>Rooms </MainTitle>
        <RegularText white>
          Our guests will enjoy comfortable rooms that have been recently renovated in a waterfront
          atmosphere along with many onsite amenities.
        </RegularText>
      </TitleBlock>
      <MainBlock style={{ flexWrap: 'wrap' }}>
        {folders && rooms && (
          <Slider
            {...settings}
            arrows={window.innerWidth > 1023}
            style={{ width: '100%', padding: '15px' }}
          >
            {folders.map(folder => (
              <RoomCard vertical room={rooms[folder]} />
            ))}
          </Slider>
        )}
        {/* <Include>
          <IncludeTitle>All rooms include:</IncludeTitle>
          <IncludeList column={isColumn} />
        </Include>

        <RoomsSlider>      
          <Slider inner arrows height="340px" content={roomsUrls} />
        </RoomsSlider> */}
      </MainBlock>
    </Wrapper>
  )
}
export default Rooms
