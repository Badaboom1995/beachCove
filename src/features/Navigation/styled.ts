import { NavLink } from 'react-router-dom'
import { colors } from 'shared/colors'
import styled from 'styled-components'

export const Logo = styled(NavLink)`
  font-family: 'Sanchez';
  font-weight: 400;
  font-size: 18px;
  padding: 15px 0px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`
export const Menu = styled.ul`
  display: flex;
`
export const Item = styled.li`
  list-style: none;
`
export const Link = styled(NavLink)`
  display: inline-block;
  padding: 30px;
  cursor: pointer;
  text-decoration: none;
`

type ThemeProps = { black?: Boolean }
export const Wrapper = styled.div<ThemeProps>`
  display: flex;
  position: relative;
  z-index: 9;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-bottom: ${props => (props.black ? `1px solid ${colors.lightGrey}` : 'none')};
  ${Logo}, ${Link} {
    color: ${props => (props.black ? colors.black : colors.white)};
  }
`
