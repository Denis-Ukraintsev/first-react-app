import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './features/profileSlice'
import dialogueReducer from './features/dialogueSlice'
import userReducer from './features/userSlice'
import authReducer from './features/authSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    dialoguesPage: dialogueReducer,
    usersPage: userReducer,
    auth: authReducer,
  },
})
