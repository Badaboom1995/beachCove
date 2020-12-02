import { combineReducers } from '@reduxjs/toolkit'
import slice from './slice'

const reducers = {
  tickets: slice.reducer,
}

const combined = combineReducers(reducers)

export type TicketsState = ReturnType<typeof combined>

export default reducers
