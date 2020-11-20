import { createSlice } from '@reduxjs/toolkit'
import * as actions from './actions'
import { makeReducer } from 'utils/custom'

type TemplateState = {
  entities: any[]
  loading: boolean
  error: string | null
}

const initialState: TemplateState = {
  loading: false,
  error: null,
  entities: [],
}
const { getTemplates } = actions
const habitsSlice = createSlice({
  name: 'templates',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    makeReducer(
      builder,
      getTemplates,
      (state, payload) => {
        state.entities = payload
      },
      action => {
        console.log('error')
      },
    )
  },
})

export default habitsSlice
