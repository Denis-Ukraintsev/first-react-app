import React, { useEffect } from 'react'
import MyPosts from '..//Profile/MyPosts/MyPosts'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from '../../redux/features/profileSlice'
import Spinner from '../sharedComponents/Spinner'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { userId } = useParams()
  const { profileData, authUserId, loading } = useSelector(
    ({ profile, auth }) => ({
      profileData: profile.profileData,
      loading: profile.loading,
      authUserId: auth.data.id,
    })
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (userId || authUserId) {
      dispatch(getProfile(userId ? userId : authUserId))
    }
  }, [])

  const i18n = {
    description: 'Ava + Description',
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <Root>
      {/* <Img
        img
        src="https://images.wallpaperscraft.ru/image/single/gory_ozero_vershiny_129263_2560x1440.jpg"
      /> */}
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
const Img = styled.img`
  width: 1100px;
  height: 500px;
  border-radius: 5px;
`

export default Profile
