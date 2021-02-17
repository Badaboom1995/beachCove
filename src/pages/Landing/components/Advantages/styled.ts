import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px;
  @media screen and (max-width: 1023px) {
    padding: 30px;
  }
`
export const Content = styled.div``
export const Item = styled.div`
  width: 300px;
  text-align: center;
  padding: 25px;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`
export const ItemTitle = styled.h3`
  font-family: 'Sanchez';
  font-size: 24px;
  font-weight: 400;
  margin: 10px;
`
export const Icon = styled.img`
  width: 90px;
  height: 90px;
`
