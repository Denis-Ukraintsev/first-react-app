import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { usersApi } from '../api/api'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { dispatch }) => {
    const response = await usersApi.getUsers()
    dispatch(setUsers(response?.data?.items))
  }
)

const initialState = {
  users: [],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    follow: (state, action) => {
      // type: 'users/follow'
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === action.payload) {
          state.users[i].followed = !state.users[i].followed
        }
      }
    },
    setUsers: (state, action) => {
      state.users.push(...action.payload)
    },
  },
})

export const { follow, setUsers } = userSlice.actions
export default userSlice.reducer
