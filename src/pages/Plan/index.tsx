import React from 'react'
import { Helmet } from 'react-helmet-async'
import PlanConstructor from 'features/PlanConstructor'

export function Plan() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="create a plan" />
      </Helmet>
      <PlanConstructor />
    </>
  )
}
