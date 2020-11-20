import React from 'react'
import { Route } from 'react-router-dom'
import { withLayout } from 'HOC/layout'

export default function makeRoutes(routes: Array<any>) {
  return routes.map((route: any) => {
    const ComponentWithLayout = withLayout(route.component)
    const Component = route.component
    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={() =>
          route.blankPage ? <Component /> : <ComponentWithLayout title={route.title} />
        }
      />
    )
  })
}
