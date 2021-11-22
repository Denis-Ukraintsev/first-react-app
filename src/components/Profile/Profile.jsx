import React from 'react'
import MyPostsContainer from '..//Profile/MyPosts/MyPostsContainer'
import styled from 'styled-components'

const Profile = () => {
  const i18n = {
    description: 'Ava + Description',
  }
  return (
    <Root>
      <Img img src="https://images4.alphacoders.com/697/697728.jpg" />
      <ItemContainer>{i18n.description}</ItemContainer>
      <MyPostsContainer />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`
const ItemContainer = styled.div`
  color: rgb(23, 88, 104);
  padding: 5px;
`
const Img = styled.img`
  width: 1110px;
  height: 500px;
  border-radius: 5px;
`

export default Profile
