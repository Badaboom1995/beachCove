import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeRequest } from 'utils/makeRequest'

export const searchInit = createAsyncThunk<any, void>('tickets/searchInit', async () => {
  let response
  try {
    response = await makeRequest('/search', 'GET')
  } catch (error) {
    console.log(error)
  }
  return response.data
})

export const getTicketsPack = createAsyncThunk<any, String>(
  'tickets/getTicketsPack',
  async (searchId, { dispatch, rejectWithValue }) => {
    const response = await makeRequest(`/tickets?searchId=${searchId}`, 'GET')
    if (response.status === 404) {
      return rejectWithValue({ stop: true })
    }
    if (response.status === 500) {
      dispatch(getTicketsPack(searchId))
      return rejectWithValue(false)
    }
    return response.data
  },
)
