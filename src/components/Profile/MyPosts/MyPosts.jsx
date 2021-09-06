import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

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
      <Post message="Hi, how are You?" likeCount="15" />
      <Post message="It's my first post" likeCount="20" />
    </div>
  )
}

export default MyPosts
