import React from 'react'

import { MainTitle, SmallText } from 'shared/typography'
import { Wrapper, List, ReviewContainer, AuthorBlock, Avatar, Author, Title } from './styled'

function Reviews() {
  return (
    <Wrapper>
      <MainTitle style={{ textAlign: 'center', marginBottom: '50px' }} black>
        Reviews
      </MainTitle>
      <List>
        <ReviewContainer>
          <AuthorBlock>
            <Avatar />
            <Author>Dolina</Author>
          </AuthorBlock>
          <Title>Perfect place to stay in Boothbay</Title>
          <SmallText>
            We really appreciate the Beach Cove Waterfront Inn. The beds are large and comfortable.
            Good location to explore the trails. Breakfast is good. The lake in front of the hotel
            is perfect to swim and to see the sunset. And the price is excellent for what the hotel
            provide. We would like to return as soon as possible.
          </SmallText>
        </ReviewContainer>
        <ReviewContainer>
          <AuthorBlock>
            <Avatar />
            <Author>Dolina</Author>
          </AuthorBlock>
          <Title>Perfect place to stay in Boothbay</Title>
          <SmallText>
            We really appreciate the Beach Cove Waterfront Inn. The beds are large and comfortable.
            Good location to explore the trails. Breakfast is good. The lake in front of the hotel
            is perfect to swim and to see the sunset. And the price is excellent for what the hotel
            provide. We would like to return as soon as possible.
          </SmallText>
        </ReviewContainer>
        <ReviewContainer>
          <AuthorBlock>
            <Avatar />
            <Author>Dolina</Author>
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
