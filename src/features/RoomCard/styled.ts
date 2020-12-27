import { colors } from 'shared/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media screen and (max-width: 1023px) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    width: 70vw;
    margin: 0 auto;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const Previews = styled.div`
  position: relative;
  min-width: 450px;
  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 350px;
    min-width: 0;
  }
`
export const Info = styled.div`
  flex-grow: 1;
  padding: 0 25px;
`
export const CardHeader = styled.div`
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 15px 0;
`
export const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`
export const Title = styled.p`
  font-family: 'Lato';
  font-size: 24px;
  font-weight: 700;
`
export const Price = styled.span`
  font-family: 'Lato';
  font-size: 24px;
  font-weight: 300;
`
export const Params = styled.div`
  display: flex;
  align-items: center;
`
export const ParamsItem = styled.div`
  font-family: 'Lato';
  margin-right: 15px;
  font-size: 13px;
  color: ${colors.black};
`
export const Description = styled.div`
  padding: 20px 0;
`
export const Icon = styled.img`
  margin-right: 5px;
`
export const Number = styled.span`
  font-size: 16px;
`
