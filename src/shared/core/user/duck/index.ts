import { combineReducers } from '@reduxjs/toolkit'
import slice from './slice'

const reducers = {
  user: slice.reducer,
}

const combined = combineReducers(reducers)

export type HabitsState = ReturnType<typeof combined>

export default reducers
