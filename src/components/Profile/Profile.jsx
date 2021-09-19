import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  const i18n = {
    description: 'ava + description',
  }

  return (
    <div>
      <ProfileInfo />
      <div className={s.item}>{i18n.description}</div>
      <MyPosts />
    </div>
  )
}

export default Profile
