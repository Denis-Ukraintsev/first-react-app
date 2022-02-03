import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { usersApi } from '../../api/api'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ pageNumber }, { dispatch }) => {
    const response = await usersApi.getUsers(pageNumber, 20)

    dispatch(setUsers(response?.data?.items))
    dispatch(setTotalCount(response?.data?.totalCount))
  }
)

const initialState = {
  users: [],
  pageSize: 20,
  totalCount: 0,
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
      state.users.push(...action.payload)
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const { follow, setUsers, setTotalCount, setCurrentPage } =
  userSlice.actions
export default userSlice.reducer
