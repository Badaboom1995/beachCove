import React from 'react'
import { Helmet } from 'react-helmet-async'
import Container from 'shared/components/Container'
import Slider from 'features/Slider'
import SliderWrapper from 'shared/components/SliderWrapper'
import Navigation from 'features/Navigation'
import Footer from 'shared/components/Footer'
import RoomCard from 'features/RoomCard'
import Include from './components/Include'
import Regulations from 'shared/components/Regulations'

export function Accomodations() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navigation />
      <SliderWrapper>
        <Slider title="Enjoy comfortable rooms that have been recently renovated in a waterfront atmosphere along with many onsite amenities." />
      </SliderWrapper>
      <Container style={{ padding: '30px 0' }}>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </Container>
      <Include />
      <Regulations />
      <Footer />
    </>
  )
}
