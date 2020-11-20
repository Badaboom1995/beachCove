import styled from 'styled-components'
import { Card } from 'antd'

export const Wrapper = styled.div`
  overflow: hidden;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
`
type ItemProps = {
  bg?: any
}
export const Item = styled(Card)<ItemProps>`
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 16px;
  background-image: url(${props => props.bg});
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: right;
  p {
    margin-bottom: 0px;
  }
  span {
    font-size: 14px;
    color: #666;
  }
  .ant-card-body {
    padding: 10px 20px;
    padding-top: 50px;
  }
`

export const ItemInfo = styled.div<ItemProps>`
  display: flex;
  flex-direction: column;
`
export const Body = styled.div`
  flex-grow: 1;
  margin-bottom: 15px;
  overflow: scroll;
`
export const Footer = styled.footer``
export const HabitTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc;
`
export const Benefit = styled.span`
  display: inline-block;
  padding: 5px;
  font-weight: normal;
`
