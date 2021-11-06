import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are You?', likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 20 },
    { id: 3, message: 'Wow, amazing site', likeCount: 21 },
  ],
  newPostText: '',
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
  },
})
export const { addPost, updateNewPostText } = profileSlice.actions
export default profileSlice.reducer
