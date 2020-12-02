import Filters from 'features/Filters'
import Sort from 'features/Sort'
import Tickets from 'features/Tickets'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wrapper, LeftColumn, RightColumn, Logo } from './styled'
import logo from './Logo.svg'

export function SearchPage() {
  return (
    <Wrapper>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Logo src={logo} alt="" />
      <LeftColumn>
        <Filters />
      </LeftColumn>
      <RightColumn>
        <Sort />
        <Tickets />
      </RightColumn>
    </Wrapper>
  )
}
