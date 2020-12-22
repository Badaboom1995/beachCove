/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable'

export const Accomodations = lazyLoad(
  () => import('./index'),
  module => module.Accomodations,
)
