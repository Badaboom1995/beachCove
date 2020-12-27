import { combineReducers } from '@reduxjs/toolkit'
import app from './slice'

const reducers = {
  app,
}

const combined = combineReducers(reducers)

export type AppState = ReturnType<typeof combined>

export default reducers
