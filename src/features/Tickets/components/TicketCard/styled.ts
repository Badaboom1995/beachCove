import styled from 'styled-components'
import { colors } from 'shared/styles'

export const Wrapper = styled.div`
  padding: 20px;
`
export const Ticket = styled.div`
  margin-bottom: 20px;
`
export const Header = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`
export const Segment = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: ${colors.primary};
`
export const CompanyIcon = styled.img``
export const InfoBlock = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`
export const Title = styled.div`
  color: ${colors.grey};
  text-transform: uppercase;
  font-size: 12px;
`
export const Content = styled.div`
  color: ${colors.black};
  font-size: 14px;
`
