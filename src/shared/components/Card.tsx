import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
`

function Card(props) {
  return <Wrapper>{props.children}</Wrapper>
}
export default Card
