import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authApi } from '../../api/api'
import { setSharedError, setShowSharedError } from './sharedSlice'

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ login, password }, { dispatch }) => {
    const response = await authApi.signIn(login, password)
    if (response.data.resultCode === 0) {
      dispatch(setIsShowLoginModal(false))
    } else {
      dispatch(setSharedError(response.data.messages[0]))
      dispatch(setShowSharedError())
    }
  }
)
export const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { dispatch }) => {
    const response = await authApi.signOut()
    if (response.data.resultCode === 0) {
      dispatch(setIsShowLoginModal(false))
    }
  }
)
export const authMe = createAsyncThunk(
  'auth/authMe',
  async (_, { dispatch }) => {
    const response = await authApi.authMe()
    dispatch(setIsInitialized(true))
    if (response.data.resultCode !== 0) {
      dispatch(setIsShowLoginModal(true))
    }
  }
)

const initialState = {
  isShowLoginModal: false,
  isInitialized: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsShowLoginModal: (state, action) => {
      state.isShowLoginModal = action.payload
    },
    setIsInitialized: (state, action) => {
      state.isInitialized = action.payload
    },
  },
})

export const { setIsShowLoginModal, setIsInitialized } = authSlice.actions
export default authSlice.reducer
