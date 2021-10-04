import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { addPost } from '../../redux/state'

const MyPosts = (props) => {
  const i18n = {
    textArea: <textarea></textarea>,
    button: <button>add post</button>,
    myPosts: 'My posts',
  }

  let postsElements = props.state.posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ))

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
  }

  return (
    <div className={s.content}>
      <div className={s.item}>{i18n.myPosts}</div>
      <div ref={newPostElement}>{i18n.textArea}</div>
      <div
        onClick={() => {
          addPost()
        }}
      >
        {i18n.button}
      </div>
      <div>{postsElements}</div>
    </div>
  )
}

export default MyPosts
