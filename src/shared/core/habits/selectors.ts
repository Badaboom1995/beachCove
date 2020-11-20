import { createSelector } from '@reduxjs/toolkit'
import { habitsAdapter } from './duck/slices/habits'
import { HabitsState } from './duck'

export const habitsSelector = state => state.habits
const habitSelectors = habitsAdapter.getSelectors((state: HabitsState) => state.habits)

export const selectHabitById = id =>
  createSelector(
    (state: HabitsState) => state,
    state => habitSelectors.selectById(state, id) || null,
  )
