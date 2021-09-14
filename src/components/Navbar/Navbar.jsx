import React from 'react'
import { NavLink } from 'react-router-dom'
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
        <NavLink to="/Profile" activeClassName={s.active}>
          {i18n.profile}
        </NavLink>
      </div>
      <br />
      <div className={s.item}>
        <NavLink to="/Dialogs">{i18n.messages}</NavLink>
      </div>
      <br />
      <div className={s.item}>
        <NavLink to="/News">{i18n.news}</NavLink>
      </div>
      <br />
      <div className={s.item}>
        <NavLink to="/Photos">{i18n.photos}</NavLink>
      </div>
      <br />
    </nav>
  )
}

export default Navbar
