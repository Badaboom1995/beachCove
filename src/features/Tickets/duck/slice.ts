import { createSlice } from '@reduxjs/toolkit'
import { Status } from 'shared/enums'
import { getTicketsPack, searchInit } from './action'

type TicketsState = {
  status: Status | null
  searchId: String | null
  entities: any[]
  stop: Boolean
}

const initialState: TicketsState = {
  status: null,
  entities: [],
  stop: false,
  searchId: null,
}

const appSlice = createSlice({
  name: 'tickets',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchInit.pending, state => {
      state.status = Status.WAITING
    })
    builder.addCase(searchInit.fulfilled, (state, action) => {
      state.status = Status.READY
      state.searchId = action.payload.searchId
    })
    builder.addCase(searchInit.rejected, state => {
      state.status = Status.ERROR
    })

    builder.addCase(getTicketsPack.pending, state => {
      state.status = Status.WAITING
    })
    builder.addCase(getTicketsPack.fulfilled, (state, action) => {
      if (action.payload) {
        const { tickets, stop } = action.payload
        state.status = Status.READY
        if (tickets.length) {
          state.entities.push(...tickets)
        }
        state.stop = stop
      }
    })
    builder.addCase(getTicketsPack.rejected, (state, action: any) => {
      state.status = Status.ERROR
      state.stop = action.payload && action.payload.stop
    })
  },
})

export default appSlice
