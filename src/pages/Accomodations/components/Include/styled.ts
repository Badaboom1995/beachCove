import { colors } from 'shared/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${colors.primary};
  padding: 30px;
  color: #fff;
`
export const Title = styled.div`
  font-family: 'Lato';
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`
export const Content = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`
export const Item = styled.div`
  width: 25%;
  margin-bottom: 15px;
  text-align: center;
`
