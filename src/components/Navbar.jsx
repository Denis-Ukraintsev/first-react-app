import React from 'react'

const Navbar = () => {
  const i18n = {
    profile: 'Profile',
    messages: 'Messages',
    news: 'News',
    music: 'Music',
    settings: 'Settings',
  }

  return (
    <nav className="nav">
      <div>
        <a>{i18n.profile}</a>
      </div>
      <br />
      <div>
        <a>{i18n.messages}</a>
      </div>
      <br />
      <div>
        <a>{i18n.news}</a>
      </div>
      <br />
      <div>
        <a>{i18n.music}</a>
      </div>
      <br />
      <div>
        <a>{i18n.settings}</a>
      </div>
    </nav>
  )
}

export default Navbar
