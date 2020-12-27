import styled from 'styled-components'
import arrow from './assets/arrow.svg'
import { colors } from 'shared/colors'

type WrapperProps = {
  big?: Boolean
  inner?: Boolean
}
export const Slide = styled.div`
  height: 100%;
  filter: brightness(0.5);
  background-color: ${colors.grey};
  position: relative;
  img {
    width: 100%;
  }
`
export const Wrapper = styled.div<WrapperProps>`
  overflow: hidden;
  .slick-dots .slick-active div {
    background-color: #fff;
  }

  ${Slide} {
    filter: ${props => props.inner && 'brightness(0.9)'};
    img {
      transform: ${props => !props.inner && 'translateY(-20%)'};
      @media screen and (max-width: 767px) {
        height: ${props => !props.inner && '80vh !important'};
        width: ${props => !props.inner && 'auto !important'};
        transform: ${props => !props.inner && 'translateX(-50%)'};
      }
    }
  }
`

type StyledArrowProps = {
  prev?: Boolean
}
export const StyledArrow = styled.div<StyledArrowProps>`
  right: ${props => !props.prev && '10px'};
  left: ${props => props.prev && '10px'};
  width: 30px;
  height: 30px;
  background-image: url(${arrow});
  background-size: contain;
  background-repeat: no-repeat;
  transform: ${props => (props.prev ? 'rotate(90deg)' : 'rotate(-90deg)')};
  z-index: 1;
  filter: brightness(0.8);
  &:before {
    content: '';
  }
  &:hover {
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    filter: brightness(1);
  }
`

export const ArrowDown = styled.img`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  z-index: 2;
  cursor: pointer;
  padding: 10px;
`
export const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #fff;
`
type TitleProps = {
  visible: Boolean
}
export const Title = styled.div<TitleProps>`
  width: 550px;
  text-align: center;
  font-family: 'Sanchez';
  font-size: 24px;
  font-weight: 300;
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: #fff;

  opacity: ${props => (props.visible ? 1 : 0)};
  transition: 0.7s all ease;

  @media screen and (max-width: 767px) {
    width: 80%;
    font-size: 18px;
  }
`
