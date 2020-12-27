import styled from 'styled-components'
import Card from 'shared/components/Card'
import reviewsBack from './assets/reviewsBack.svg'
import dolina from './assets/dolina.png'
import densie from './assets/densie.png'
import hollywd from './assets/hollywd.png'

export const Wrapper = styled.div`
  padding: 50px 0px;
  position: relative;
`
export const Rates = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  padding-left: 74px;
  padding-right: 14px;
  padding-top: 56px;
  padding-bottom: 28px;
  background-image: url(${reviewsBack});
  background-size: cover;
  background-position: 0 0;
  display: flex;
  @media screen and (max-width: 1023px) {
    transform: scale(0.7);
    right: -50px;
    top: 0px;
  }
  @media screen and (max-width: 767px) {
    transform: scale(0.4);
    right: -90px;
    top: 0px;
  }
`
export const RatesItem = styled.div`
  color: #fff;
  text-align: center;
  margin-right: 10px;
`
export const Icon = styled.img`
  width: 30px;
  height: 30px;
`
export const Number = styled.div`
  font-size: 18px;
`
export const TextRate = styled.div`
  font-size: 12px;
`
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    justify-content: space-around;
  }
`
export const ReviewContainer = styled(Card)`
  width: 320px;
  padding: 20px;
`
export const AuthorBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`
type AvatarProps = {
  bg: any
}
export const Avatar = styled.div<AvatarProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;
  background-image: url(${props => props.bg});
  background-size: contain;
`
export const Author = styled.span`
  font-family: 'Lato';
  font-size: 14px;
`
export const Title = styled.p`
  font-family: 'Lato';
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin: 10px 0;
  color: #000000;
`
