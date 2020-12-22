import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from 'features/Navigation'
import Footer from 'shared/components/Footer'
import SliderWrapper from 'shared/components/SliderWrapper'
import Slider from 'features/Slider'
import { RegularText, MainTitle } from 'shared/typography'
import { Section, Text, List, Item, CarouselBlock, CarouselWrapper } from './styled'
import Pictures from './components/Pictures'

import Carousel from 'features/Carousel'

export function Recreations() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navigation />
      <SliderWrapper>
        <Slider title="Relax by the pool or lakeside. Swim, canoe, fish or take advantage of the many activities and amusements the Boothbay Region" />
      </SliderWrapper>
      <RegularText style={{ textAlign: 'center', padding: '10px' }}>
        Please visit{' '}
        <a href="/" style={{ color: '#000' }}>
          Boothbay Harbor Region Chamber of Commerce
        </a>{' '}
        to help plan your days with us.
      </RegularText>

      <Section>
        <Text>
          <MainTitle black>On Site Amenities and Activities</MainTitle>
          <List>
            <Item>- Swim or lounge in our pool or at the beach</Item>
            <Item>- Use our canoes or rowboats to explore</Item>
            <Item>- Play a family game of badminton in our lush green rolling grounds</Item>
            <Item>- Fish from our dock or from our boats</Item>
            <Item>- Enjoy 3+ acres of rolling landscape</Item>
          </List>
        </Text>
        <Pictures />
      </Section>

      <CarouselBlock>
        <MainTitle black>Just one mile away</MainTitle>
        <RegularText style={{ width: '570px', margin: '0 auto', marginBottom: '30px' }}>
          Beautiful downtown Boothbay Harbor which offers shopping, galleries, public library and a
          variety of community activities
        </RegularText>
        <CarouselWrapper>
          <Carousel />
        </CarouselWrapper>
      </CarouselBlock>

      <Section>
        <Text>
          <MainTitle black>For Children</MainTitle>
          <List>
            <Item>
              - the Maine Aquarium offers a touch tank for children and a variety of educational
              programs
            </Item>
            <Item>- Public Playground </Item>
            <Item>
              - The Railway Village which offers a ride on a narrow gauge steam train, antique car
              museum and restore village buildings
            </Item>
            <Item>
              - Boothbay Band Concert on the library lawn on most Thursday evenings during the
              summer months
            </Item>
            <Item>- Story hour at Boothbay Memorial Library</Item>
            <Item>- Mini-golf and ice creamLibrary</Item>
          </List>
        </Text>
        <Pictures />
      </Section>

      <Footer />
    </>
  )
}
