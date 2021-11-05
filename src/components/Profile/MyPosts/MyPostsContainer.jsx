import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MyPosts from './MyPosts'
import { addPost, updateNewPostText } from '../../../features/profileSlice'

const MyPostsContainer = () => {
  const dispatch = useDispatch()
  const { posts, newPostText } = useSelector(({ profile }) => profile)
  const onAddPost = () => {
    dispatch(addPost())
  }

  const onPostChange = (text) => {
    dispatch(updateNewPostText(text))
  }
  return (
    <MyPosts
      updateNewPostText={onPostChange}
      onAddPost={onAddPost}
      posts={posts}
      newPostText={newPostText}
    />
  )
}

export default MyPostsContainer
