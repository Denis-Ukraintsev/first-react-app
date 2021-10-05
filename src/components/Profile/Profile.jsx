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
      <MyPosts state={props.state} addPost={props.addPost} />
    </div>
  )
}

const ItemContainer = styled.div`
  color: rgb(23, 88, 104);
  padding: 5px;
`

export default Profile
