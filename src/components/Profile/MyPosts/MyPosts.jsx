import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  const i18n = {
    textArea: <textarea></textarea>,
    button: <button>add post</button>,
    myPosts: 'My posts',
  }

  let posts = [
    { id: 1, message: 'Hi, how are You?', likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 20 },
    { id: 3, message: 'Wow, amazing site', likeCount: 21 },
  ]

  let postsElements = posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ))

  return (
    <div className={s.content}>
      <div className={s.item}>{i18n.myPosts}</div>
      <div>{i18n.textArea}</div>
      <div>{i18n.button}</div>
      {postsElements}
    </div>
  )
}

export default MyPosts
