import React, { useState } from 'react'
import { Wrapper, Slide, ArrowDown, StyledArrow, Dot, Title } from './styled'
import Slider from 'react-slick'
import nature from './assets/nature.jpg'
import arrow from './assets/arrow.svg'
import preview from './assets/preview.jpg'

type SliderProps = {
  content?: any[]
  big?: Boolean
  inner?: Boolean
  title?: String
  arrows?: Boolean
  dots?: Boolean
  height?: string
  autoplay?: Boolean
}

function NextArrow(props) {
  const { className, onClick } = props
  return <StyledArrow className={className} onClick={onClick} />
}

function PrevArrow(props) {
  const { className, onClick } = props
  return <StyledArrow className={className} onClick={onClick} prev />
}

function SliderView({ content, big, title, inner, arrows, dots, height, autoplay }: SliderProps) {
  const [titleVisible, togleTitle] = useState(true)
  const settings = {
    dots: dots,
    appendDots: dots => (
      <div
        style={{
          bottom: '10px',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => <Dot />,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    speed: 700,
    nextArrow: arrows && <NextArrow />,
    prevArrow: arrows && <PrevArrow />,
    beforeChange: (current, next) => {
      togleTitle(false)
    },
  }
  return (
    <Wrapper big={big} inner={inner}>
      {title && <Title visible={titleVisible}>{title}</Title>}
      <Slider {...settings}>
        {/* {props.content.map(imgSrc => (
          <img src={imgSrc} alt="" />
        ))} */}
        <Slide>
          <img style={{ height: height || 'auto' }} src={nature} alt="" />
        </Slide>
        <Slide>
          <img style={{ height: height || 'auto' }} src={nature} alt="" />
        </Slide>
      </Slider>
      {!inner && <ArrowDown src={arrow} />}
    </Wrapper>
  )
}
export default SliderView
