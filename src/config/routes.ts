import { Landing } from 'pages/Landing'
import { Accomodations } from 'pages/Accomodations'
import { Recreations } from 'pages/Recreations'
import { Contacts } from 'pages/Contacts'
import { NotFoundPage } from 'pages/NotFoundPage'

export const mainRoutes = [
  {
    path: '/',
    component: Landing,
    exact: true,
  },
  {
    path: '/accomodation',
    component: Accomodations,
  },
  {
    path: '/recreation',
    component: Recreations,
  },
  {
    path: '/contact',
    component: Contacts,
  },
  {
    path: '*',
    component: NotFoundPage,
    blankPage: true,
  },
]
