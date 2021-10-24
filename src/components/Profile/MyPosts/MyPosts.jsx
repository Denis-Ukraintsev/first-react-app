import React from 'react'
import styled from 'styled-components'
import Post from './Post/Post'
import {
  addPostCreateAction,
  updateNewPostTextCreateAction,
} from '../../redux/store'

const MyPosts = (props) => {
  const i18n = {
    button: 'add post',
    myPosts: 'My posts',
  }

  const postsElements = props.posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ))

  const addPost = () => {
    props.dispatch(addPostCreateAction())
  }

  const onPostChange = (event) => {
    const text = event.currentTarget.value
    props.dispatch(updateNewPostTextCreateAction(text))
  }
  return (
    <div>
      <ItemContainer>{i18n.myPosts}</ItemContainer>
      <div>
        <textarea
          name="ter"
          onChange={onPostChange}
          value={props.newPostText}
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
