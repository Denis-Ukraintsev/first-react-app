import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sharedError: '',
  isShowSharedError: false,
}

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setSharedError: (state, action) => {
      state.sharedError = action.payload
    },
    setShowSharedError: (state) => {
      state.isShowSharedError = true
    },
    setCloseSharedError: (state) => {
      state.isShowSharedError = false
      state.sharedError = ''
    },
  },
})

export const { setSharedError, setShowSharedError, setCloseSharedError } =
  sharedSlice.actions
export default sharedSlice.reducer
