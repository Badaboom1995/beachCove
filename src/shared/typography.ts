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
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const RegularText = styled(Text)`
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const BigText = styled(Text)`
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
