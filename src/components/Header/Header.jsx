import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setIsShowLoginModal } from '../../redux/features/authSlice'

const Header = () => {
  const dispatch = useDispatch()
  const handleShowLoginModal = () => {
    dispatch(setIsShowLoginModal(true))
  }

  return (
    <Root>
      <HeaderContainer>
        <HeaderImg src="https://simg.nicepng.com/png/small/50-501551_stadium-com-photography-icon-photography-logo-icon-png.png" />
        <button onClick={handleShowLoginModal}>Sign In</button>
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
