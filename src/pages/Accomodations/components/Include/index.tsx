import React from 'react'
import IncludeList from 'shared/components/IncludeList'
import { Wrapper, Title, Content, Item } from './styled'

function Include() {
  return (
    <Wrapper>
      <Title>Rooms include</Title>
      <Content>
        <IncludeList />
      </Content>
    </Wrapper>
  )
}
export default Include
