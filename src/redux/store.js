import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './features/profileSlice'
import dialogueReducer from './features/dialogueSlice'
import userReducer from './features/userSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    dialoguesPage: dialogueReducer,
    usersPage: userReducer,
  },
})
