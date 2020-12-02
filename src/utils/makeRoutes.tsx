import React from 'react'
import { Route } from 'react-router-dom'

export default function makeRoutes(routes: Array<any>) {
  return routes.map((route: any) => {
    const Component = route.component
    return (
      <Route key={route.path} path={route.path} exact={route.exact} render={() => <Component />} />
    )
  })
}
