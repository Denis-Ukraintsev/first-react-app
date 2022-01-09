import React from 'react'
import DialogueItem from './DialogueItem/DialogueItem'
import Message from './Message/Message'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {
  addNewMessage,
  updateNewPostMessage,
} from '../../redux/features/dialogueSlice'

const Dialogues = () => {
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

  const MessageChange = (event) => {
    const text = event.currentTarget.value
    onMessageChange(text)
  }

  const i18n = {
    button: 'Add new message',
  }
  const dialoguesElements = dialogues.map((d) => (
    <DialogueItem name={d.name} id={d.id} avatar={d.avatar} />
  ))

  const messagesElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ))

  return (
    <Root>
      <ContentWrapper>
        <DialoguesElements>{dialoguesElements}</DialoguesElements>
        <MessagesElements>{messagesElements}</MessagesElements>
      </ContentWrapper>
      <Button>
        <button onClick={onAddNewMessage}>{i18n.button}</button>
        <Textarea>
          <textarea
            placeholder="type new message here"
            onChange={MessageChange}
            value={newMessage}
          />
        </Textarea>
      </Button>
    </Root>
  )
}

const Root = styled.div`
  color: rgb(23, 88, 104);
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: flex-start;
`

const ContentWrapper = styled.div`
  display: flex;
`

const DialoguesElements = styled.div`
  display: flex;
  flex-direction: column;
`

const MessagesElements = styled.div`
  color: rgb(71, 22, 80);
  display: flex;
  flex-direction: column;
`

const Button = styled.div`
  display: flex;
`
const Textarea = styled.div`
  display: flex;
  padding-left: 13px;
`

export default Dialogues
