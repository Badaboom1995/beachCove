import { createSelector } from '@reduxjs/toolkit'
import { habitsAdapter } from 'shared/core/habits/duck/slices/habits'
import { checkCompleted } from 'utils/custom'

type SortedHabitsType = {
  coming: any[]
  completed: any[]
}
const habitSelectors = habitsAdapter.getSelectors<any>(state => state.habits)
const habitsSelector = state => habitSelectors.selectAll(state)

const filterSelector = state => state.filters

const filteredHabits = (habits, filter) => {
  switch (filter) {
    case 'SHOW_MORNING':
      return habits.filter(habit => habit.time === 'morning')
    case 'SHOW_AFTERNOON':
      return habits.filter(habit => habit.time === 'afternoon')
    case 'SHOW_EVENING':
      return habits.filter(habit => habit.time === 'evening')
    case 'SHOW_GROUP':
      return habits.filter(habit => habit.group)
    default:
      return habits
  }
}
const getSortedHabits = filteredHabits => {
  const sortedHabits: SortedHabitsType = { coming: [], completed: [] }
  filteredHabits.forEach(habit => {
    let isCompleted = false
    if (habit.state.length !== 0) {
      isCompleted = checkCompleted(habit.state)
    }
    const currentKey = isCompleted ? 'completed' : 'coming'
    sortedHabits[currentKey].push(habit)
  })
  return sortedHabits
}

export const selectFilteredHabits = createSelector(
  habitsSelector,
  filterSelector,
  (habits, filter) => {
    return filteredHabits(habits, filter)
  },
)
export const selectSortedHabits = createSelector(selectFilteredHabits, filteredHabits =>
  getSortedHabits(filteredHabits),
)
