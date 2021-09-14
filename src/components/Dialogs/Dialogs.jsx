import React from 'react'
import s from './Dialogs.module.css'
const Dialogs = (props) => {
  return (
    <div className={s.dialogues}>
      <div className={s.dialogue}>
        <div className={s.dialogueName}>Denis</div>
        <div className={s.dialogueName}>Julia</div>
        <div className={s.dialogueName}>Lutsius</div>
      </div>
      <div className={s.message}>
        <div className={s.messageName}>Hello, I've created this site</div>
        <div className={s.messageName}>Hi, I'm a photographer</div>
        <div className={s.messageName}>Meow, I'm a cat rock climber </div>
      </div>
    </div>
  )
}

export default Dialogs
