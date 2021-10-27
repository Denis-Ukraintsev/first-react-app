const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'

const dialoguesReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      const newPostMessage = {
        id: 4,
        message: state.newMessage,
      }

      return {
        ...state,
        messages: [...state.messages, newPostMessage],
        newMessage: '',
      }
    }
    case UPDATE_NEW_POST_MESSAGE: {
      return {
        ...state,
        newMessage: action.messageText,
      }
    }
    default: {
      return state
    }
  }
}

export const addNewMessageCreateAction = () => ({ type: ADD_NEW_MESSAGE })

export const updateNewPostMessageCreateAction = (text) => ({
  type: UPDATE_NEW_POST_MESSAGE,
  messageText: text,
})

export default dialoguesReducer
