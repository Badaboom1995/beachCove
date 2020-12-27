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
import { SingleSlider, BackBlock } from './styled'
import SliderWrapper from 'shared/components/SliderWrapper'
import Footer from 'shared/components/Footer'
import Navigation from 'features/Navigation'
import two from './assets/2.jpg'
import three from './assets/3.jpg'

export function Landing() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navigation />
      <SliderWrapper>
        <Slider autoplay content={[three, two]} />
      </SliderWrapper>
      <Container>
        <Welcome />
        <Video />
        <BackBlock>
          <Advantages />
          <Rooms />
          <Amenities />
        </BackBlock>
        <Attractions content={[three, two]} />
        <Reviews />
        <SingleSlider>
          <Slider inner arrows content={[three, two]} height="550px" />
        </SingleSlider>
      </Container>
      <Footer />
    </>
  )
}
