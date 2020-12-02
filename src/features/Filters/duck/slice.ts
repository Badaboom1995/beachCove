import { createSlice } from '@reduxjs/toolkit'
import { Stops } from 'shared/enums'

type FiltersState = {
  active: Stops[]
}

const initialState: FiltersState = {
  active: [Stops.ZERO, Stops.ONE, Stops.TWO],
}

const appSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    addFilter(state, action: { payload: Stops }) {
      state.active.push(action.payload)
    },
    removeFilter(state, action: { payload: Stops }) {
      state.active = state.active.filter(item => item !== action.payload)
    },
    addAllFilter(state) {
      state.active = [Stops.ZERO, Stops.ONE, Stops.TWO, Stops.THREE]
    },
  },
})

export const { addFilter, removeFilter, addAllFilter } = appSlice.actions
export default appSlice
