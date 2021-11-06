import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../../features/profileSlice'
import dialogueReducer from '../../features/dialogueSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    dialoguesPage: dialogueReducer,
  },
})
