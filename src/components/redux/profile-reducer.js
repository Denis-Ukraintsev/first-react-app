const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: 5,
      message: state.newPostText,
      likeCount: 5,
    }

    state.posts.push(newPost)
    state.profilePage.newPostText = ''
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText
  }

  return state
}

export default profileReducer
