import React from 'react'
import s from './Profile.module.css'
const Profile = () => {
  const i18n = {
    description: 'ava + description',
    myPosts: 'My posts',
    post1: 'Post1',
    post2: 'Post2',
  }

  return (
    <div className={s.content}>
      <div>
        <img src="https://images4.alphacoders.com/697/697728.jpg" />
      </div>
      <div className={s.item}>{i18n.description}</div>
      <div className={s.item}>{i18n.myPosts}</div>
      <div className={s.item}>{i18n.post1}</div>
      <div className={s.item}>{i18n.post2}</div>
    </div>
  )
}

export default Profile
