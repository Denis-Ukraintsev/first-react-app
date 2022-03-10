import React from 'react'
import { connect } from 'react-redux'
import {
  addNewMessage,
  updateNewPostMessage,
} from 'src/redux/features/dialogueSlice'
import DialogueItem from 'src/components/Dialogues/DialogueItem/DialogueItem'
import Message from 'src/components/Dialogues/Message/Message'
import styled from 'styled-components'
import { blue, purple } from 'src/theme/colors'

const Dialogues = ({
  dialogues,
  messages,
  newMessage,
  addNewMessage,
  updateNewPostMessage,
}) => {
  const messageChange = ({ currentTarget }) => {
    updateNewPostMessage(currentTarget.value)
  }

  const i18n = {
    button: 'Add new message',
    placeholder: 'type new message here',
  }
  const dialoguesElements = dialogues?.map((d) => (
    <DialogueItem key={d.id} name={d.name} id={d.id} avatar={d.avatar} />
  ))

  const messagesElements = messages?.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ))

  return (
    <Root>
      <ContentWrapper>
        <DialoguesElements>{dialoguesElements}</DialoguesElements>
        <MessagesElements>{messagesElements}</MessagesElements>
      </ContentWrapper>
      <InputContainer>
        <button onClick={addNewMessage}>{i18n.button}</button>
        <Textarea
          placeholder={i18n.placeholder}
          onChange={messageChange}
          value={newMessage}
        />
      </InputContainer>
    </Root>
  )
}

const Root = styled.div`
  color: ${blue};
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
  color: ${purple};
  display: flex;
  flex-direction: column;
`

const InputContainer = styled.div`
  display: flex;
`
const Textarea = styled.textarea`
  margin-left: 13px;
`
const mapStateToProps = ({ dialoguesPage }) => ({
  dialogues: dialoguesPage.dialogues,
  messages: dialoguesPage.messages,
  newMessage: dialoguesPage.newMessage,
})

export default connect(mapStateToProps, {
  addNewMessage,
  updateNewPostMessage,
})(Dialogues)
