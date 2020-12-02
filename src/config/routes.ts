import { SearchPage } from 'pages/SearchPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export const mainRoutes = [
  {
    path: '/',
    component: SearchPage,
    exact: true,
  },
  {
    path: '*',
    component: NotFoundPage,
    blankPage: true,
  },
]
