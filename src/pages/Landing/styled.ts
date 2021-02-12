import { colors } from 'shared/colors'
import styled from 'styled-components'
import bigBack from './bigBack.svg'

export const Wrapper = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  padding-top: 160px;
  position: relative;
  font-family: 'Sanchez', serif;
`
export const FirstScreen = styled.div`
  position: relative;
  height: 650px;
  overflow: hidden;
  margin-top: -116px;
`
export const SingleSlider = styled.div`
  position: relative;
  /* height: 550px; */
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
`
export const BackBlock = styled.div`
  background-image: url(${bigBack});

  background-position: -540px 590px;
  background-repeat: no-repeat;
  background-size: 1885px;
  @media screen and (max-width: 1023px) {
    background-position: -430px 870px;
  }
  @media screen and (max-width: 767px) {
    background-position: -650px 1370px;
  }
  @media screen and (max-width: 550px) {
    background-position: -650px 1320px;
  }
  @media screen and (max-width: 450px) {
    background-position: -750px 1330px;
  }
  @media screen and (max-width: 350px) {
    background-color: ${colors.primary};
  }
`
