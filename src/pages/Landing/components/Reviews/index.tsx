import React from 'react'

import { MainTitle, SmallText } from 'shared/typography'
import {
  Wrapper,
  List,
  ReviewContainer,
  AuthorBlock,
  Avatar,
  Author,
  Title,
  Rates,
  RatesItem,
  Icon,
  Number,
  TextRate,
} from './styled'
import booking from './assets/booking.png'
import hotel from './assets/hotel.png'
import trip from './assets/trip.png'
import dolina from './assets/dolina.jpeg'
import densie from './assets/densie.png'
import hollywd from './assets/hollywd.png'

function Reviews() {
  return (
    <Wrapper>
      <MainTitle style={{ textAlign: 'center', marginBottom: '80px' }} black>
        Reviews
      </MainTitle>
      <Rates>
        <RatesItem>
          <Icon src={booking} />
          <Number>9.2</Number>
          <TextRate>Wonderful</TextRate>
        </RatesItem>
        <RatesItem>
          <Icon src={hotel} />
          <Number>4.5</Number>
          <TextRate>Excellente</TextRate>
        </RatesItem>
        <RatesItem>
          <Icon src={trip} />
          <Number>9.5</Number>
          <TextRate>Exceptional</TextRate>
        </RatesItem>
      </Rates>
      <List>
        <ReviewContainer>
          <AuthorBlock>
            <Avatar bg={dolina} />
            <Author>Dolina</Author>
          </AuthorBlock>
          <Title>Excellent stay!</Title>
          <SmallText>
            We loved our stay here! The owner is so friendly and helpful. We stayed in the executive
            suite, and it had a large king bed and pull out couch. The room was very large and
            spacious and had a beautiful water view.
          </SmallText>
        </ReviewContainer>
        <ReviewContainer>
          <AuthorBlock>
            <Avatar bg={hollywd} />
            <Author>hollywd </Author>
          </AuthorBlock>
          <Title>Still the best!</Title>
          <SmallText>
            My family and I just returned from our sixth stay at the Beach Cove. We had been worried
            that we wouldn't be able to experience our annual summer trip because of COVID.
            Thankfully, it was possible, and we were able to have a wonderful, socially distanced
            and safe time.
          </SmallText>
        </ReviewContainer>
        <ReviewContainer>
          <AuthorBlock>
            <Avatar bg={densie} />
            <Author>Densie</Author>
          </AuthorBlock>
          <Title>Perfect place to stay in Boothbay</Title>
          <SmallText>
            We really appreciate the Beach Cove Waterfront Inn. The beds are large and comfortable.
            Good location to explore the trails. Breakfast is good. The lake in front of the hotel
            is perfect to swim and to see the sunset. And the price is excellent for what the hotel
            provide. We would like to return as soon as possible.
          </SmallText>
        </ReviewContainer>
      </List>
    </Wrapper>
  )
}
export default Reviews
