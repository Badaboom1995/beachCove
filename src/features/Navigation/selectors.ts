import { createSelector } from '@reduxjs/toolkit'
import { habitsAdapter } from 'shared/core/habits/duck/slices/habits'

const habitSelectors = habitsAdapter.getSelectors<any>(state => state.habits)
const selectItems = state => habitSelectors.selectAll(state)

export const selectAll = createSelector(selectItems, (habits: any) => habits)
export const selectGroup = createSelector(selectItems, (habits: any) =>
  habits.filter(item => item.group),
)

type timeType = 'morning' | 'evening' | 'afternoon' | 'allTime'
export const selectByTime = (time: timeType) =>
  createSelector(selectItems, (habits: any) => habits.filter(item => item.time === time))
