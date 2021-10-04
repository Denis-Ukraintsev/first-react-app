import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styled from 'styled-components'
import { addPost } from './../redux/state'

const Profile = (props) => {
  const i18n = {
    description: 'ava + description',
  }

  return (
    <div>
      <ProfileInfo />
      <ItemContainer>{i18n.description}</ItemContainer>
      <MyPosts state={props.state} addPost={addPost} />
    </div>
  )
}

const ItemContainer = styled.div`
  color: rgb(23, 88, 104);
  padding: 5px;
`

export default Profile
