import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { usersApi } from '../../api/api'

// export const fetchUsers = createAsyncThunk(
//   'users/fetchUsers',
//   async (_, { dispatch }) => {
//     const response = await usersApi.getUsers()
//     dispatch(setUsers(response?.data?.items))
//   }
// )

const initialState = {
  isShowLoginModal: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsShowLoginModal: (state, action) => {
      state.isShowLoginModal = action.payload
    },
  },
})

export const { setIsShowLoginModal } = authSlice.actions
export default authSlice.reducer
