import React from 'react'
import s from '../Dialogues.module.css'

const Message = (props) => {
  return (
    <div className={s.messageName}>
      <li> {props.message} </li>
    </div>
  )
}
export default Message
