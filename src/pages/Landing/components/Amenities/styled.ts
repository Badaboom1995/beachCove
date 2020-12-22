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
`
export const List = styled.div`
  display: flex;
  justify-content: space-around;
`
export const ListItem = styled(Card)`
  display: block;
  width: 225px;
  text-align: center;
  color: #000;
`
export const Image = styled.img`
  width: 100%;
  height: 158px;
`
