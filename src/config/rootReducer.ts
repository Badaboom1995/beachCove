import { combineReducers } from '@reduxjs/toolkit'

import tickets from 'features/Tickets/duck'
import sort from 'features/Sort/duck'
import filters from 'features/Filters/duck'

export function createReducer() {
  return combineReducers({
    ...tickets,
    ...sort,
    ...filters,
  })
}
