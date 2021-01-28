import React from 'react'
import { MainTitle, BigText } from 'shared/typography'
import { Wrapper, Content } from './styled'

function Welcome() {
  return (
    <Wrapper>
      <Content>
        <MainTitle>Welcome to Beach Cove Waterfront Inn!</MainTitle>
        <BigText white>
          A quiet, secluded getaway, that provides the perfect location for your vacation.
        </BigText>
      </Content>
    </Wrapper>
  )
}

export default Welcome
