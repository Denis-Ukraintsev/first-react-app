import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MyPosts from 'src/components/Profile/MyPosts/MyPosts'
import Spinner from 'src/components/sharedComponents/Spinner'
import styled from 'styled-components'

const Profile = ({ profileData, authUserId, loading, getProfile }) => {
  const { userId } = useParams()

  useEffect(() => {
    if (userId || authUserId) {
      getProfile(userId ? userId : authUserId)
    }
  }, [authUserId, getProfile, userId])

  const i18n = {
    description: 'Ava + Description',
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <Root>
      <ItemContainer>{profileData?.fullName}</ItemContainer>
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

export default Profile
