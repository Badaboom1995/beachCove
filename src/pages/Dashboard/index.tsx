import React from 'react'
import { Helmet } from 'react-helmet-async'
import Habits from 'features/Habits'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Habits />
    </>
  )
}
