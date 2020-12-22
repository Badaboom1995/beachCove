/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable'

export const Contacts = lazyLoad(
  () => import('./index'),
  module => module.Contacts,
)
