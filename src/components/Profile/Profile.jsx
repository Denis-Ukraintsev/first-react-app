import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Post from './MyPosts/Post/Post'

const Profile = (props) => {
  const i18n = {
    description: 'ava + description',
  }

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ))

  return (
    <div>
      <ProfileInfo />
      <div className={s.item}>{i18n.description}</div>
      <MyPosts />
      {postsElements}
    </div>
  )
}

export default Profile
