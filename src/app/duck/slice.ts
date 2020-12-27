import { createSlice } from '@reduxjs/toolkit'

export const app = { rooms: {}, firebase: null }
const filtersSlice = createSlice({
  name: 'app',
  initialState: app,
  reducers: {
    setFirebaseApp(state, action) {
      state.firebase = action.payload
    },
    setRooms(state, action) {
      state.rooms = action.payload
    },
    setImages(state, action) {
      state.rooms[action.payload.folder].urls.push(action.payload.url)
    },
  },
})

export const { setImages, setRooms } = filtersSlice.actions

export default filtersSlice.reducer
