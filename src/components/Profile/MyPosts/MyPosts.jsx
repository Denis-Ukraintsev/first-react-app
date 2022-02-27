import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost, updateNewPostText } from 'src/redux/features/profileSlice'
import Post from './Post/Post'
import styled from 'styled-components'

const MyPosts = () => {
  const dispatch = useDispatch()

  const { posts, newPostText } = useSelector(({ profile }) => profile)

  const onAddPost = () => {
    dispatch(addPost())
  }

  const onPostChange = (text) => {
    dispatch(updateNewPostText(text))
  }

  const PostChange = (event) => {
    const text = event.currentTarget.value
    onPostChange(text)
  }

  const i18n = {
    button: 'add post',
    myPosts: 'My posts',
  }

  const postsElements = posts.map((p) => (
    <Post key={p.id} message={p.message} id={p.id} likeCount={p.likeCount} />
  ))

  return (
    <div>
      <ItemContainer>{i18n.myPosts}</ItemContainer>
      <div>
        <textarea
          onChange={PostChange}
          value={newPostText}
          placeholder="type new post here"
        />
      </div>
      <button onClick={onAddPost}>{i18n.button}</button>
      <div>{postsElements}</div>
    </div>
  )
}

const ItemContainer = styled.div`
  color: rgb(28, 79, 88);
  padding: 5px;
`

export default MyPosts
