import React from 'react'
import s from './Navbar.module.css'
const Navbar = () => {
  const i18n = {
    profile: 'Profile',
    messages: 'Messages',
    news: 'News',
    photos: 'Photos',
  }

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/Profile">{i18n.profile}</a>
      </div>
      <br />
      <div>
        <a href="/Dialogs">{i18n.messages}</a>
      </div>
      <br />
      <div>
        <a href="/News">{i18n.news}</a>
      </div>
      <br />
      <div>
        <a href="/Photos">{i18n.photos}</a>
      </div>
      <br />
    </nav>
  )
}

export default Navbar
