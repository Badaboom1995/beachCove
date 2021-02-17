import Container from 'shared/components/Container'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  padding: 50px 20px;
  box-sizing: border-box;
  height: calc(100vh - 141px - 117px);

  @media screen and (max-width: 1023px) {
    height: auto;
  }
`
export const Content = styled(Container)`
  display: flex;
  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
    padding: 0px;
  }
`
export const Directions = styled.div`
  flex-grow: 1;
`
export const Section = styled.div`
  margin-bottom: 20px;
  width: 400px;
  @media screen and (max-width: 1023px) {
    width: auto;
    max-width: 400px;
  }
`
