import { colors } from 'shared/colors'
import styled from 'styled-components'
import Card from 'shared/components/Card'

export const Wrapper = styled.div`
  /* background: ${colors.primary}; */
  padding: 30px 0;
  padding-bottom: 100px;
  color: #fff;
`
export const TitleBlock = styled.div`
  width: 600px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    p {
      width: 300px;
      margin: 0 auto;
    }
  }
`
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width: 1023px) {
    width: 550px;
    margin: 0 auto;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const ListItem = styled(Card)`
  display: block;
  width: 225px;
  text-align: center;
  color: #000;
  p {
    padding: 0 10px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 158px;
`
