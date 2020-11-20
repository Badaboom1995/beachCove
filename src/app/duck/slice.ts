import { createSlice } from '@reduxjs/toolkit'
import { bootstrap } from './action'

export enum AppStatus {
  READY,
  ERROR,
  WAITING,
}

type AppState = {
  status: AppStatus
}

const initialState: AppState = {
  status: AppStatus.WAITING,
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(bootstrap.pending, state => {
      state.status = AppStatus.WAITING
    })
    builder.addCase(bootstrap.fulfilled, state => {
      state.status = AppStatus.READY
    })
    builder.addCase(bootstrap.rejected, state => {
      state.status = AppStatus.ERROR
    })
  },
})

export default appSlice
