import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Dialogues from './Dialogues'
import {
  addNewMessage,
  updateNewPostMessage,
} from '../../features/dialogueSlice'

const DialoguesContainer = () => {
  const dispatch = useDispatch()
  const { dialogues, messages, newMessage } = useSelector(
    ({ dialoguesPage }) => dialoguesPage
  )
  const onAddNewMessage = () => {
    dispatch(addNewMessage())
  }

  const onMessageChange = (text) => {
    dispatch(updateNewPostMessage(text))
  }
  return (
    <Dialogues
      onAddNewMessage={onAddNewMessage}
      updateNewPostMessage={onMessageChange}
      dialogues={dialogues}
      messages={messages}
      newMessage={newMessage}
    />
  )
}

export default DialoguesContainer
