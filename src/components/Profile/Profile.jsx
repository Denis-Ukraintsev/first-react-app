import React from 'react'
import MyPosts from '..//Profile/MyPosts/MyPosts'
import styled from 'styled-components'

const Profile = () => {
  const i18n = {
    description: 'Ava + Description',
  }
  return (
    <Root>
      <Img
        img
        src="https://images.wallpaperscraft.ru/image/single/gory_ozero_vershiny_129263_2560x1440.jpg"
      />
      <ItemContainer>{i18n.description}</ItemContainer>
      <MyPosts />
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
  width: 1100px;
  height: 500px;
  border-radius: 5px;
`

export default Profile
