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
type ToggleProps = {
  isOpen: Boolean
}
export const Toggle = styled.button<ToggleProps>`
  display: none;
  position: absolute;
  right: 40px;
  top: 45px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
  &:focus {
    outline: none;
  }
  &:before,
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 5px;
    top: 15px;
    font-size: 0;
    width: 25px;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    transition: 0.3s all ease;
  }
  &:before {
    transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
  }
  &:after {
    transform: ${props => (props.isOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
    top: ${props => !props.isOpen && '22px;'};
  }
`
type MenuProps = {
  isOpen: Boolean
}
export const Menu = styled.ul<MenuProps>`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    overflow: hidden;
    transition: 0.3s all ease;
    height: ${props => (props.isOpen ? '215px' : '0')};
    margin: ${props => !props.isOpen && '0'};
  }
`
export const Item = styled.li`
  list-style: none;
  @media screen and (max-width: 767px) {
    &:last-of-type {
      margin-bottom: 20px;
    }
  }
`
export const Link = styled(NavLink)`
  font-family: 'Lato';
  display: inline-block;
  padding: 30px;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  &.link_active {
    text-decoration: underline;
  }
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
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    background-color: #232323;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  ${Logo}, ${Link} {
    color: ${props => (props.black ? colors.black : colors.white)};
  }
`
