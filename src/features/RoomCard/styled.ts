import { colors } from 'shared/colors'
import styled from 'styled-components'
import arrow from 'assets/blackArrow.svg'

type CardProps = {
  vertical?: boolean
}

export const Previews = styled.div`
  position: relative;
  min-width: 450px;
  max-width: 450px;
  @media screen and (max-width: 1023px) {
    width: 100%;
    max-width: none;
    /* height: 350px; */
    min-width: 0;
  }
`
export const Info = styled.div`
  flex-grow: 1;
  padding: 0 25px;
  @media screen and (max-width: 1023px) {
    padding: 0;
  }
`
export const CardHeader = styled.div`
  border-bottom: 1px solid ${colors.lightGrey};
`
export const Row = styled.div`
  display: flex;
  align-items: baseline;
  padding: 7px 0;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    padding: 12px 0;
  }
`
export const Title = styled.p`
  font-family: 'Lato';
  font-size: 24px;
  margin: 10px 0;
  font-weight: 700;
`
export const Price = styled.span`
  font-family: 'Lato';
  font-size: 24px;
  font-weight: 300;
`
export const SmallPrice = styled.span`
  font-family: 'Lato';
  color: #000;
  font-size: 18px;
  font-weight: 300;
  width: 100%;
  display: inline-block;
  margin-bottom: 10px;
  text-align: center;
`
export const Params = styled.div`
  display: flex;
  align-items: center;
`
export const ParamsItem = styled.div`
  font-family: 'Lato';
  margin-right: 15px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 20%;
  color: ${colors.black};
`
export const Description = styled.div`
  padding: 0px 15px;
`
export const Features = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  flex-wrap: wrap;
  padding: 0 15px;
  font-family: 'Lato';
  div {
    width: 49%;
    @media screen and (max-width: 1023px) {
      width: 90%;
      margin: 0 auto;
    }
    &:before {
      content: '- ';
    }
  }
`
export const Icon = styled.img`
  margin-right: 5px;
  width: 25px;
  height: 25px;
`
export const Number = styled.span`
  font-size: 16px;
`
export const ScrollableParams = styled.div`
  width: calc(100%);
  overflow: scroll;
  display: flex;
`
type CollapseProps = {
  open?: boolean
}
export const Collapse = styled.div<CollapseProps>`
  overflow: hidden;
  width: 100%;
  padding: 10px 0;
  ${Params} {
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`
export const CollapseTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 10px 15px;

  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: contain;
    transform: rotate(-90deg);
  }
`

export const Wrapper = styled.div<CardProps>`
  display: flex;
  margin-bottom: 40px;
  flex-direction: ${props => props.vertical && 'column'};
  width: ${props => props.vertical && '70%'};
  margin: ${props => props.vertical && '10px auto'};
  border-radius: ${props => props.vertical && '10px'};
  box-shadow: ${props => props.vertical && '0px 2px 8px rgba(0, 0, 0, 0.1)'};
  @media screen and (max-width: 1023px) {
    box-shadow: none;
  }
  overflow: hidden;
  ${props =>
    props.vertical &&
    `${Previews} {
    width: 100%;
    max-width: none;
  }
  ${CardHeader} {
    padding: 0 10px;
  }
  ${Params} {
    justify-content:space-between;
    overflow:scroll;
    @media screen and (max-width: 1023px){
      justify-content: start;
      flex-wrap:wrap;
    }
  }
  ${ParamsItem} {
    text-align:center;
    min-width: 14%;
    font-size: 11px;
    max-height: none;
    margin:0;
    @media screen and (max-width: 1023px){
      min-width: 25%;
      padding: 10px;
    }
  }
  ${Info} {
    margin-top: -6px;
    background-color: ${colors.white};
    padding: 0;
    color: ${colors.black};
  }
  ${Title} {
    font-weight: normal;
  }
  ${Icon} {
    width:25px;
    height:25px;
  }
  ${Description} {
    border-bottom: none;
  }
  `}
  img {
    height: auto !important;
    margin: 0 auto;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    flex-wrap: wrap;
    width: 70vw;
    margin: 0 auto;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
