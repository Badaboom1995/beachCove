import { createSlice } from '@reduxjs/toolkit'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_MORNING: 'SHOW_MORNING',
  SHOW_AFTERNOON: 'SHOW_AFTERNOON',
  SHOW_EVENING: 'SHOW_EVENING',
  SHOW_GROUP: 'SHOW_GROUP',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload
    },
  },
})

export const { setVisibilityFilter } = filtersSlice.actions

export default filtersSlice.reducer
