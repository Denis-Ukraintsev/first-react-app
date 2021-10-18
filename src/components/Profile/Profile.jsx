import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styled from 'styled-components'

const Profile = (props) => {
  const i18n = {
    description: 'Ava + Description',
  }

  return (
    <div>
      <ProfileInfo />
      <ItemContainer>{i18n.description}</ItemContainer>
      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  )
}

const ItemContainer = styled.div`
  color: rgb(23, 88, 104);
  padding: 5px;
`

export default Profile
