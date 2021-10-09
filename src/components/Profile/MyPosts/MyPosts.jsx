import React from 'react'
import styled from 'styled-components'
import Post from './Post/Post'

const MyPosts = (props) => {
  const i18n = {
    button: 'add post',
    myPosts: 'My posts',
  }

  const postsElements = props.state.posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ))

  const newPostElement = React.createRef()

  const addPost = () => {
    const text = newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value = ''
  }
  return (
    <div>
      <ItemContainer>{i18n.myPosts}</ItemContainer>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <button onClick={addPost}>{i18n.button}</button>
      <div>{postsElements}</div>
    </div>
  )
}

const ItemContainer = styled.div`
  color: rgb(28, 79, 88);
  padding: 5px;
`

export default MyPosts
