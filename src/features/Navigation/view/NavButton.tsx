/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Icon, Text, Wrapper, Counter } from '../styled'

type NavButtonProps = {
  children: any
  icon: string
  to: string
  counter?: number
  filter?: 'morning' | 'afternoon' | 'evening' | 'group'
  onClick?: any
}

export const NavButton = (props: NavButtonProps) => {
  const { children, icon, counter, to, onClick } = props
  return (
    <Wrapper to={to} onClick={onClick}>
      <Icon src={icon} />
      <Text>{children}</Text>
      <Counter>{counter}</Counter>
    </Wrapper>
  )
}
