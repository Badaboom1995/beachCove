import styled from 'styled-components'

type ButtonProps = { active?: boolean }
export const MainLoader = styled.div<ButtonProps>`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  z-index: 1002;
`
