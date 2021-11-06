import React from 'react'
import styled from 'styled-components'
import Post from './Post/Post'

const MyPosts = ({ updateNewPostText, onAddPost, posts, newPostText }) => {
  const i18n = {
    button: 'add post',
    myPosts: 'My posts',
  }

  const postsElements = posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ))

  const addPost = () => {
    onAddPost()
  }

  const onPostChange = (event) => {
    const text = event.currentTarget.value
    updateNewPostText(text)
  }
  return (
    <div>
      <ItemContainer>{i18n.myPosts}</ItemContainer>
      <div>
        <textarea
          onChange={onPostChange}
          value={newPostText}
          placeholder="type new post here"
        />
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
