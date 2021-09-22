import React from 'react'
import s from './MyPosts.module.css'

const MyPosts = () => {
  const i18n = {
    textArea: <textarea></textarea>,
    button: <button>add post</button>,
    myPosts: 'My posts',
  }

  return (
    <div className={s.content}>
      <div className={s.item}>{i18n.myPosts}</div>
      <div>{i18n.textArea}</div>
      <div>{i18n.button}</div>
    </div>
  )
}

export default MyPosts
