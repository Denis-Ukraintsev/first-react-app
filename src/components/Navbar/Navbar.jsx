import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROUTES } from 'src/helpers/navHelper'
import styled from 'styled-components'

const Navbar = () => {
  const { userId } = useSelector(({ auth }) => ({
    userId: auth.data.id,
  }))

  const i18n = {
    profile: 'Profile',
    messages: 'Dialogues',
    news: 'News',
    photos: 'Photos',
    users: 'Users',
  }

  return (
    <MenuContainer>
      {Boolean(userId) && (
        <MenuItem>
          <NavLink to={ROUTES.PROFILE} activeStyle={activeStyles}>
            {i18n.profile}
          </NavLink>
        </MenuItem>
      )}

      <MenuItem>
        <NavLink to={ROUTES.DIALOGUES} activeStyle={activeStyles}>
          {i18n.messages}
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to={ROUTES.NEWS} activeStyle={activeStyles}>
          {i18n.news}
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to={ROUTES.PHOTOS} activeStyle={activeStyles}>
          {i18n.photos}
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to={ROUTES.USERS} activeStyle={activeStyles}>
          {i18n.users}
        </NavLink>
      </MenuItem>
    </MenuContainer>
  )
}

const MenuItem = styled.div`
  a {
    color: rgb(240, 216, 236);
    text-decoration: none;
  }

  :not(:last-child) {
    margin-bottom: 10px;
  }
`
const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, rgb(87, 87, 148), pink);
  width: 70px;
  border-radius: 5px;
  padding: 5px;
  height: calc(100hv-70px);
`

const activeStyles = {
  color: 'brown',
}

export default Navbar
