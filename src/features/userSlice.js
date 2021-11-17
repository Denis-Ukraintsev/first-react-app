import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    { id: 1, followed: false, fullName: 'Denis', activity: 'model' },
    { id: 2, followed: false, fullName: 'Julia', activity: 'photographer' },
    { id: 3, followed: false, fullName: 'Lutsius', activity: 'model' },
  ],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    follow: (state, action) => {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === action.payload) {
          state.users[i].followed = true
        }
      }
    },
    unfollow: (state, action) => {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === action.payload) {
          state.users[i].followed = false
        }
      }
    },
    setUser: () => {},
  },
})

export const { follow, unfollow, setUser } = userSlice.actions
export default userSlice.reducer
