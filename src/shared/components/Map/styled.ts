import styled from 'styled-components'
import Card from '../Card'

export const Wrapper = styled(Card)`
  width: 420px;
  padding: 20px;
  color: #000;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    margin-bottom: 15px;
  }
`
export const Title = styled.h2`
  font-family: 'Lato';
  font-size: 24px;
  margin: 0;
  margin-bottom: 15px;
  @media screen and (max-width: 1023px) {
    margin-bottom: 0;
  }
`
export const Time = styled.span`
  font-family: 'Lato';
  font-size: 14px;
`
export const Row = styled.div`
  font-size: 14px;
  display: flex;
  margin-bottom: 5px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    font-size: 12px;
  }
`
export const Name = styled.span`
  font-family: 'Lato';
  font-weight: 700;
  margin-right: 5px;
`
export const Value = styled.span`
  font-family: 'Lato';
`
export const MapWrapper = styled.div`
  margin-top: 30px;
  iframe {
    width: 100%;
    height: 250px;
  }
`
