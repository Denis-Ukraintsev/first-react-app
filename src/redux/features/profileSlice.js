import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { profileApi } from '../../api/api'
import { setSharedError, setShowSharedError } from './sharedSlice'

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (id, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const response = await profileApi.getProfile(id)
      dispatch(setLoading(false))
      if (response.status === 200) {
        dispatch(setProfileData(response.data))
      } else {
        dispatch(setSharedError(response.statusText))
        dispatch(setShowSharedError())
      }
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setSharedError(error.message))
      dispatch(setShowSharedError())
    }
  }
)

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are You?', likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 20 },
    { id: 3, message: 'Wow, amazing site', likeCount: 21 },
  ],
  newPostText: '',
  loading: false,
  profileData: {
    userId: null,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '1234',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
    },
    photos: {
      small: '',
      large: '',
    },
  },
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state) => {
      if (state.newPostText) {
        const newPost = {
          id: state.posts.length + 1,
          message: state.newPostText,
          likeCount: 5,
        }
        state.posts.push(newPost)
        state.newPostText = ''
      }
    },
    updateNewPostText: (state, action) => {
      state.newPostText = action.payload
    },
    setProfileData: (state, action) => {
      state.profileData = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})
export const { addPost, updateNewPostText, setProfileData, setLoading } =
  profileSlice.actions
export default profileSlice.reducer
