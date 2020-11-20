import { combineReducers } from '@reduxjs/toolkit'
import filters from './slices/filters'

const reducers = {
  filters,
}

const combined = combineReducers(reducers)

export type FilterState = ReturnType<typeof combined>

export default reducers
