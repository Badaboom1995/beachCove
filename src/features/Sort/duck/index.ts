import { combineReducers } from '@reduxjs/toolkit'
import slice from './slice'

const reducers = {
  sort: slice.reducer,
}

const combined = combineReducers(reducers)

export type SortState = ReturnType<typeof combined>

export default reducers
