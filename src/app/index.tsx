/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'styles/global-styles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import makeRoutes from 'utils/makeRoutes'
import { mainRoutes } from 'config/routes'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Helmet defaultTitle="Beach Cove">
          <meta name="description" content="Search" />
        </Helmet>
        <Switch>{makeRoutes(mainRoutes)}</Switch>
        <GlobalStyle />
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}
