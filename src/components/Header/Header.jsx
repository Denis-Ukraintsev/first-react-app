import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { signOut, setIsShowLoginModal } from 'src/redux/features/authSlice'

const Header = () => {
  const { userId } = useSelector(({ auth }) => ({
    userId: auth.data.id,
  }))
  const dispatch = useDispatch()
  const handleShowLoginModal = () => {
    dispatch(setIsShowLoginModal(true))
  }
  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <Root>
      <HeaderContainer>
        <HeaderImg src="https://simg.nicepng.com/png/small/50-501551_stadium-com-photography-icon-photography-logo-icon-png.png" />
        <button onClick={userId ? handleSignOut : handleShowLoginModal}>
          {userId ? 'Sign out' : 'Sign in'}
        </button>
      </HeaderContainer>
    </Root>
  )
}

const Root = styled.header`
  display: flex;
  height: 70px;
  width: 100%;
  opacity: 0.8;
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  align-items: center;
  background-color: rgb(170, 111, 180);
  border-radius: 5px;
  height: 70px;
  width: 100%;
  opacity: 0.8;
`

const HeaderImg = styled.img`
  width: 75px;
  height: 65px;
  border-radius: 5px;
  padding: 2px 0 0 2px;
`

export default Header
