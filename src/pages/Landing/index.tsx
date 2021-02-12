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

import one from './assets/1.jpeg'
import two from './assets/2.jpg'
import three from './assets/3.jpg'
import four from './assets/4.jpg'
import five from './assets/5.jpg'
import six from './assets/6.jpg'
import seven from './assets/7.jpg'
import eight from './assets/8.jpg'
import nine from './assets/9.jpeg'
import whale from 'assets/whale.jpg'
import garden1 from 'assets/garden1.jpg'
import garden2 from 'assets/garden2.jpg'
import boats1 from 'assets/boats1.jpg'
import downtown from 'assets/downtown.jpg'
import light from 'assets/light.jpg'

export function Landing() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navigation />
      <SliderWrapper>
        <Slider autoplay content={[one, two, three, four, five]} />
      </SliderWrapper>
      <Container>
        <Welcome />
        {/* <Video /> */}
        <BackBlock>
          <Advantages />
          <Rooms />
          <Amenities />
        </BackBlock>
        <Attractions content={[whale, boats1, garden1, garden2, downtown, light]} />
        <Reviews />
        <SingleSlider>
          <Slider inner arrows content={[six, seven, eight, nine, five]} height="550px" />
        </SingleSlider>
      </Container>
      <Footer />
    </>
  )
}
