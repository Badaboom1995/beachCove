import styled from 'styled-components'
import bigBack from './back.svg'

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
  height: 550px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
`
export const BackBlock = styled.div`
  background-image: url(${bigBack});
  background-position: -320px 620px;
  background-repeat: no-repeat;
`
