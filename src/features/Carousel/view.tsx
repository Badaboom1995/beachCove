import React from 'react'
import { Wrapper, Slide } from './styled'
import Slider from 'react-slick'
import picture from './picture.jpg'
import { RegularText } from 'shared/typography'
import garden from 'assets/garden1.jpg'
import whale from 'assets/whale.jpg'
import downtown from 'assets/downtown.jpg'

function CarouselView() {
  const settings = {
    className: 'center',
    autoplay: true,
    centerMode: window.innerWidth > 1023 ? true : false,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
  }
  return (
    <Wrapper>
      <Slider {...settings}>
        <Slide>
          <img src={downtown} alt="" />
          <RegularText>Ocean fishing day trips</RegularText>
        </Slide>
        <Slide>
          <img src={whale} alt="" />
          <RegularText>Boat trips to islands, lighthouses, whales, seals and puffins</RegularText>
        </Slide>
        <Slide>
          <img src={garden} alt="" />
          <RegularText>Coastal Maine Botanical Gardens</RegularText>
        </Slide>
      </Slider>
    </Wrapper>
  )
}
export default CarouselView
