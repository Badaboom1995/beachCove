/* eslint-disable react/jsx-props-no-spreading */

const makeReducer = (builder, action, onSuccess: (state: any, payload: any) => any, onFail) => {
  builder.addCase(action.pending, (state, action) => {
    state.loading = true
  })
  builder.addCase(action.fulfilled, (state, action) => {
    state.loading = false
    onSuccess(state, action.payload)
  })
  builder.addCase(action.rejected, (state, action) => {
    state.loading = false
    onFail(state, action)
  })
}

export default makeReducer
