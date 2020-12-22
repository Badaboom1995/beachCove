import React from 'react'
import { Helmet } from 'react-helmet-async'
import Container from 'shared/components/Container'
import Slider from 'features/Slider'
import Welcome from './components/Welcome'
import Video from './components/Video'
import Advantages from './components/Advantages'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Attractions from './components/Attractions'
import Reviews from './components/Reviews'
import { FirstScreen, SingleSlider, BackBlock } from './styled'
import SliderWrapper from 'shared/components/SliderWrapper'
import Footer from 'shared/components/Footer'
import Navigation from 'features/Navigation'

export function Landing() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navigation />
      <SliderWrapper>
        <Slider autoplay />
      </SliderWrapper>
      {/* <Welcome /> */}
      <Container>
        <Welcome />
        <Video />
        <BackBlock>
          <Advantages />
          <Rooms />
          <Amenities />
        </BackBlock>
        <Attractions />
        <Reviews />
        <SingleSlider>
          <Slider inner arrows />
        </SingleSlider>
      </Container>
      <Footer />
    </>
  )
}
