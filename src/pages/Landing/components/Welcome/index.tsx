import React from 'react'
import { MainTitle, BigText } from 'shared/typography'
import { Wrapper, Content } from './styled'

function Welcome() {
  return (
    <Wrapper>
      <Content>
        <MainTitle>Welcome to Beach Cove Waterfront Inn!</MainTitle>
        <BigText white>
          A beautiful beachfront inn in Boothbay Harbor. Located just off Route 27 one mile from the
          hustle and bustle of downtown Boothbay Harbor{' '}
        </BigText>
      </Content>
    </Wrapper>
  )
}

export default Welcome
