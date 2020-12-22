import { colors } from 'shared/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${colors.black};
  color: #fff;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`
export const Section = styled.div`
  width: 30%;
  p {
    margin: 0;
  }
`
export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  margin: 0 auto;
`
export const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`
