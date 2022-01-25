import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { usersApi } from '../../api/api'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { dispatch }) => {
    const response = await usersApi.getUsers()
    dispatch(setUsers(response?.data?.items))
  }
)

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
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
      state.users = action.payload
    },
  },
})

export const { follow, setUsers, setCurrentPage } = userSlice.actions
export default userSlice.reducer
