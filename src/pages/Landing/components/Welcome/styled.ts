import styled from 'styled-components'
import bg from './bg.svg'

export const Wrapper = styled.div`
  background-image: url(${bg});
  background-position: center 10px;
  background-repeat: no-repeat;
  color: #fff;
  padding: 55px;
  @media screen and (max-width: 768px) {
    background-position: center -15px;
    padding: 70px 30px;
  }
  @media screen and (max-width: 767px) {
    background-size: cover;
  }
`
export const Content = styled.div`
  width: 715px;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`
