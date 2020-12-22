import { colors } from 'shared/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
  /* background-color: ${colors.primary}; */
  color: #fff;
`
export const TitleBlock = styled.div`
  width: 600px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
`
export const MainBlock = styled.div`
  display: flex;
`
export const Include = styled.div`
  width: 50%;
  padding: 0px 50px;
`
export const IncludeTitle = styled.h2`
  font-family: 'Lato';
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;

  color: #ffffff;
`
export const IncludeList = styled.ul`
  padding: 0;
`
type IncludeItemProps = {
  icon?: any
}
export const IncludeItem = styled.li<IncludeItemProps>`
  list-style: none;
  padding: 5px 0;
  display: flex;
  color: #fff;
  font-weight: normal;
  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${props => props.icon});
    background-size: contain;
    background-position: center;
    /* background: #ccc; */
    margin-right: 10px;
  }
`
export const RoomsSlider = styled.div`
  position: relative;
  width: 50%;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
