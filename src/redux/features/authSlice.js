import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authApi } from 'src/api/api'
import {
  setSharedError,
  setShowSharedError,
} from 'src/redux/features/sharedSlice'

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ login, password }, { dispatch }) => {
    const response = await authApi.signIn(login, password)
    if (response.data.resultCode === 0) {
      dispatch(setIsShowLoginModal(false))
      dispatch(setUserId(response.data.data.userId))
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
      dispatch(setUserData({ id: null, email: '', login: '' }))
    }
  }
)
export const authMe = createAsyncThunk(
  'auth/authMe',
  async (_, { dispatch }) => {
    const response = await authApi.authMe()

    if (response.data.resultCode === 0) {
      dispatch(setUserData(response.data.data))
    }
    dispatch(setIsInitialized(true))
  }
)

const initialState = {
  isShowLoginModal: false,
  isInitialized: false,
  data: {
    id: null,
    email: '',
    login: '',
  },
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
    setUserData: (state, action) => {
      state.data = action.payload
    },
    setUserId: (state, action) => {
      state.data.id = action.payload
    },
  },
})

export const { setIsShowLoginModal, setIsInitialized, setUserData, setUserId } =
  authSlice.actions
export default authSlice.reducer
