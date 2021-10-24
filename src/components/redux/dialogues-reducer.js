const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'

const dialoguesReducer = (state, action) => {
  if (action.type === ADD_NEW_MESSAGE) {
    const newPostMessage = {
      id: 4,
      message: state.newMessage,
    }

    state.messages.push(newPostMessage)
    state.newMessage = ''
  } else if (action.type === UPDATE_NEW_POST_MESSAGE) {
    state.newMessage = action.messageText
  }

  return state
}

export default dialoguesReducer
