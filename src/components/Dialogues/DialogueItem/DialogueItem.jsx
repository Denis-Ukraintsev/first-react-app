import React from 'react'
import s from '../Dialogues.module.css'
import { NavLink } from 'react-router-dom'

const DialogueItem = (props) => {
  let path = '/Dialogues/' + props.id
  return (
    <div className={s.dialogueName}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  )
}
export default DialogueItem
