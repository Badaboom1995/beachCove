import { createSlice } from '@reduxjs/toolkit'

export enum SortBy {
  PRICE,
  DURATION,
}

type SortState = {
  type: SortBy
}

const initialState: SortState = {
  type: SortBy.PRICE,
}

const appSlice = createSlice({
  name: 'sort',
  initialState: initialState,
  reducers: {
    setSort(state, action: { payload: SortBy }) {
      state.type = action.payload
    },
  },
})
export const { setSort } = appSlice.actions
export default appSlice
