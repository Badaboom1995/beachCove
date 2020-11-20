import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.nav`
  display: block;
  grid-column-start: start;
  grid-column-end: main;
  background-color: ${props => props.theme.default.primary};
  padding: 15px;
  overflow: scroll;
`
export const NavList = styled.ul`
  padding: 15px 0;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  &:last-child {
    border-bottom: none;
  }
`
export const NavItem = styled.li`
  list-style: none;
  margin: 0;
`

export const Wrapper = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  padding: 10px 15px;
  padding-left: 15px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  cursor: pointer;
  transition: 0.1s all ease;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.12);
    color: #fff;
    outline: none;
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.32);
  }
`
export const Icon = styled.img`
  width: 22px;
  margin-right: 15px;
`
export const Text = styled.span`
  flex-grow: 1;
  text-align: left;
`
export const Counter = styled.span`
  font-size: 12px;
`
