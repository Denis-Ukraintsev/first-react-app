import React from 'react'
import {
  addPostCreateAction,
  updateNewPostTextCreateAction,
} from '../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = ({ posts, dispatch, newPostText }) => {
  const onAddPost = () => {
    dispatch(addPostCreateAction())
  }

  const onPostChange = (text) => {
    dispatch(updateNewPostTextCreateAction(text))
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
