import { combineReducers } from '@reduxjs/toolkit'
import slice from './slice'

const reducers = {
  filters: slice.reducer,
}

const combined = combineReducers(reducers)

export type FiltersState = ReturnType<typeof combined>

export default reducers
