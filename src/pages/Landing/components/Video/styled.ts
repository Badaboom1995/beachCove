import styled from 'styled-components'
export const Wrapper = styled.div`
  padding: 20px;
`
export const VideoContainer = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 900px;
  height: 530px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 90vw;
    height: auto;
  }
  iframe {
    width: 100%;
    height: 530px;
  }
`
