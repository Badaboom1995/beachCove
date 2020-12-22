import { colors } from 'shared/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.black};
`
export const SliderBlock = styled.div`
  position: relative;
  width: 605px;
`
export const TextBlock = styled.div`
  padding: 30px;
`
export const TitleBlock = styled.div`
  margin-bottom: 30px;
`
export const Subtitle = styled.p`
  font-family: 'Lato';
  margin: 0;
  margin-top: -15px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #dfdfdf;
`
export const List = styled.ul`
  padding: 0;
  color: #fff;
`
export const ListItem = styled.li`
  list-style: none;
  font-weight: 300;
  margin-bottom: 10px;
`
