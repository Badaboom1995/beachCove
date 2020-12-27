import React from 'react'
import { Wrapper, Slide } from './styled'
import Slider from 'react-slick'
import picture from './picture.jpg'
import { RegularText } from 'shared/typography'

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
          <img src={picture} alt="" />
          <RegularText>
            Excursion boats to see islands, light houses, whales, seals and puffins
          </RegularText>
        </Slide>
        <Slide>
          <img src={picture} alt="" />
          <RegularText>
            Excursion boats to see islands, light houses, whales, seals and puffins
          </RegularText>
        </Slide>
        <Slide>
          <img src={picture} alt="" />
          <RegularText>
            Excursion boats to see islands, light houses, whales, seals and puffins
          </RegularText>
        </Slide>
        <Slide>
          <img src={picture} alt="" />
          <RegularText>
            Excursion boats to see islands, light houses, whales, seals and puffins
          </RegularText>
        </Slide>
        <Slide>
          <img src={picture} alt="" />
          <RegularText>
            Excursion boats to see islands, light houses, whales, seals and puffins
          </RegularText>
        </Slide>
      </Slider>
    </Wrapper>
  )
}
export default CarouselView
