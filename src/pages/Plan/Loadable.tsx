/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable'

export const Plan = lazyLoad(
  () => import('./index'),
  module => module.Plan,
)
