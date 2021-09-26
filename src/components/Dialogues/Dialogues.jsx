import React from 'react'
import s from './Dialogues.module.css'
import DialogueItem from './DialogueItem/DialogueItem'
import Message from './Message/Message'

const Dialogues = (props) => {
  let dialoguesElements = props.state.dialogues.map((d) => (
    <DialogueItem name={d.name} id={d.id} avatar={d.avatar} />
  ))

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ))

  return (
    <div className={s.dialogues}>
      <div>{dialoguesElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogues
