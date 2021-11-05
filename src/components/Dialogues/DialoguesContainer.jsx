import React from 'react'
import {
  addNewMessageCreateAction,
  updateNewPostMessageCreateAction,
} from '../redux/dialogues-reducer'
import Dialogues from './Dialogues'

const DialoguesContainer = ({ dialoguesPage, dispatch }) => {
  const addNewMessage = () => {
    dispatch(addNewMessageCreateAction())
  }

  const onMessageChange = (text) => {
    dispatch(updateNewPostMessageCreateAction(text))
  }
  return (
    <Dialogues
      onAddNewMessage={addNewMessage}
      updateNewPostMessage={onMessageChange}
      dialoguesPage={dialoguesPage}
    />
  )
}

export default DialoguesContainer
