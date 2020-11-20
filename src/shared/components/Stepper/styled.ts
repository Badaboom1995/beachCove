import styled from 'styled-components'
import { Button } from 'antd'

export const Wrapper = styled.div`
  position: relative;
  padding: 50px;
  padding-top: 100px;
  height: 100vh;
`
export const SlideWrapper = styled.div`
  width: 100vw;
`
export const ContentWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`
export const PrevButton = styled(Button)`
  position: absolute;
  top: 20px;
  left: 20px;
`
