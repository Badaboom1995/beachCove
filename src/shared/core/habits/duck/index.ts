import { combineReducers } from '@reduxjs/toolkit'
import habits from './slices/habits'

const reducers = {
  habits: habits.reducer,
}

const combined = combineReducers(reducers)

export type HabitsState = ReturnType<typeof combined>

export default reducers
