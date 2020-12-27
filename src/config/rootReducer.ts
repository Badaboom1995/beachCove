import { combineReducers } from '@reduxjs/toolkit'

import app from 'app/duck'

export function createReducer() {
  return combineReducers({
    ...app,
  })
}
