import React from 'react'
import s from './Dialogues.module.css'
import DialogueItem from './DialogueItem/DialogueItem'
import Message from './Message/Message'

const Dialogues = (props) => {
  let dialogues = [
    { id: 1, name: 'Denis' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Lutsius' },
  ]

  let messages = [
    { id: 1, message: "Hi, I've created this site" },
    { id: 2, message: 'Hello, I am a photographer' },
    { id: 3, message: 'Meow, I am a cat rock climber' },
  ]

  let dialoguesElements = dialogues.map((d) => (
    <DialogueItem name={d.name} id={d.id} />
  ))

  let messagesElements = messages.map((m) => (
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
