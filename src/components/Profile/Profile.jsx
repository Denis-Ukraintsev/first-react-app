import React from 'react'
import MyPostsContainer from '..//Profile/MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styled from 'styled-components'

const Profile = ({ profilePage, dispatch }) => {
  const i18n = {
    description: 'Ava + Description',
  }
  return (
    <Root>
      <ProfileInfo />
      <ItemContainer>{i18n.description}</ItemContainer>
      <MyPostsContainer
        posts={profilePage.posts}
        dispatch={dispatch}
        newPostText={profilePage.newPostText}
      />
    </Root>
  )
}

const Root = styled.div``
const ItemContainer = styled.div`
  color: rgb(23, 88, 104);
  padding: 5px;
`

export default Profile
