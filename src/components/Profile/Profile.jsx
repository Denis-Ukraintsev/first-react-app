import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  const i18n = {
    description: 'ava + description',
  }

  return (
    <div className={s.content}>
      <div>
        <img src="https://images4.alphacoders.com/697/697728.jpg" />
      </div>
      <div className={s.item}>{i18n.description}</div>
      <MyPosts />
    </div>
  )
}

export default Profile
