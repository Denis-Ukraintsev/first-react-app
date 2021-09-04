import React from 'react'
import s from './Navbar.module.css'
const Navbar = () => {
  const i18n = {
    profile: 'Profile',
    messages: 'Messages',
    news: 'News',
    music: 'Music',
    settings: 'Settings',
  }

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>{i18n.profile}</a>
      </div>
      <br />
      <div className={s.item}>
        <a>{i18n.messages}</a>
      </div>
      <br />
      <div className={s.item}>
        <a>{i18n.news}</a>
      </div>
      <br />
      <div className={s.item}>
        <a>{i18n.music}</a>
      </div>
      <br />
      <div className={s.item}>
        <a>{i18n.settings}</a>
      </div>
    </nav>
  )
}

export default Navbar
