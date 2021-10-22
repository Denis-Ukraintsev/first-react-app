import React from 'react'
import DialogueItem from './DialogueItem/DialogueItem'
import Message from './Message/Message'
import styled from 'styled-components'
import {
  addNewMessageCreateAction,
  updateNewPostMessageCreateAction,
} from './../redux/store'

const Dialogues = (props) => {
  const i18n = {
    button: 'Add new message',
  }
  const dialoguesElements = props.dialoguesPage.dialogues.map((d) => (
    <DialogueItem name={d.name} id={d.id} avatar={d.avatar} />
  ))

  const messagesElements = props.dialoguesPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ))

  const newMessageElement = React.createRef()
  const addNewMessage = () => {
    props.dispatch(addNewMessageCreateAction())
  }

  const onMessageChange = () => {
    const text = newMessageElement.current.value
    props.dispatch(updateNewPostMessageCreateAction(text))
  }
  return (
    <DialoguesContainer>
      <div>{dialoguesElements}</div>
      <MessagesContainer>{messagesElements}</MessagesContainer>

      <div>
        <button onClick={addNewMessage}>{i18n.button}</button>
      </div>
      <div>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newPostText}
        ></textarea>
      </div>
    </DialoguesContainer>
  )
}

const DialoguesContainer = styled.div`
  color: rgb(23, 88, 104);
  display: grid;
  grid-template-columns: 2fr 10fr;
`

const MessagesContainer = styled.div`
  color: rgb(71, 22, 80);
`

export default Dialogues
