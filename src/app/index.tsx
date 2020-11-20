/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { themes } from 'config/themes'
import 'antd/dist/antd.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import makeRoutes from 'utils/makeRoutes'
import { mainRoutes } from 'config/routes'
import { useDispatch, useSelector } from 'react-redux'
import { bootstrap } from './duck/action'
import { MainLoader } from './styled'
import { RootState } from 'index'

export function App() {
  const appStatus = useSelector((state: RootState) => state.app.status)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(bootstrap())
  }, [dispatch])

  return (
    <ThemeProvider theme={themes}>
      {appStatus === 2 && <MainLoader>Loading...</MainLoader>}
      <BrowserRouter>
        <Helmet titleTemplate="%s - Reflect" defaultTitle="React Boilerplate">
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Switch>{makeRoutes(mainRoutes)}</Switch>
        <GlobalStyle />
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  )
}
