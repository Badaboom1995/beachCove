import { colors } from 'shared/colors'
import styled from 'styled-components'

type MainTitleProps = {
  black?: Boolean
}
export const MainTitle = styled.h2<MainTitleProps>`
  font-family: 'Sanchez';
  font-size: 36px;
  font-weight: 400;
  margin: 10px 0;
  color: ${props => (props.black ? colors.black : colors.white)};
`

type TextProps = {
  white?: Boolean
}
export const Text = styled.p<TextProps>`
  font-family: 'Lato';
  font-weight: 400;
  margin: 10px 0;
  /* color: ${props => (props.white ? colors.white : '#000')}; */
`
export const SmallText = styled(Text)`
  font-size: 14px;
`
export const RegularText = styled(Text)`
  font-size: 18px;
`
export const BigText = styled(Text)`
  font-size: 24px;
`
