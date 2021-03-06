import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './features/profileSlice'
import dialogueReducer from './features/dialogueSlice'
import usersReducer from './features/usersSlice'
import authReducer from './features/authSlice'
import sharedReducer from './features/sharedSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    dialoguesPage: dialogueReducer,
    usersPage: usersReducer,
    auth: authReducer,
    shared: sharedReducer,
  },
})
