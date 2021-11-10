import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    { id: 1, followed: false, fullName: 'Denis', activity: 'model' },
    { id: 2, followed: true, fullName: 'Julia', activity: 'photographer' },
    { id: 3, followed: true, fullName: 'Lutsius', activity: 'model' },
  ],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    follow: () => {},
    unfollow: () => {},
    setUser: () => {},
  },
})

export const { follow, unfollow, setUser } = userSlice.actions
export default userSlice.reducer
