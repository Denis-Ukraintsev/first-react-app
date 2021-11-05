import React from 'react'
import DialogueItem from './DialogueItem/DialogueItem'
import Message from './Message/Message'
import styled from 'styled-components'

const Dialogues = ({
  onAddNewMessage,
  updateNewPostMessage,
  dialoguesPage,
}) => {
  const i18n = {
    button: 'Add new message',
  }
  const dialoguesElements = dialoguesPage.dialogues.map((d) => (
    <DialogueItem name={d.name} id={d.id} avatar={d.avatar} />
  ))

  const messagesElements = dialoguesPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ))

  const addNewMessage = () => {
    onAddNewMessage()
  }

  const onMessageChange = (event) => {
    const text = event.currentTarget.value
    updateNewPostMessage(text)
  }
  return (
    <DialoguesContainer>
      <DialoguesElements>{dialoguesElements}</DialoguesElements>
      <MessagesContainer>{messagesElements}</MessagesContainer>

      <Button>
        <button onClick={addNewMessage}>{i18n.button}</button>
      </Button>
      <Textarea>
        <textarea
          placeholder="type new message"
          onChange={onMessageChange}
          value={dialoguesPage.newMessage}
        />
      </Textarea>
    </DialoguesContainer>
  )
}

const DialoguesContainer = styled.div`
  color: rgb(23, 88, 104);
  display: grid;
  grid-template-columns: 2fr 10fr;
`
const DialoguesElements = styled.div``
const Button = styled.div``
const Textarea = styled.div``
const MessagesContainer = styled.div`
  color: rgb(71, 22, 80);
`
export default Dialogues
