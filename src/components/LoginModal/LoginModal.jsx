import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setIsShowLoginModal } from '..//../redux/features/authSlice'

const LoginModal = () => {
  const i18n = {
    login: 'login',
    password: 'password',
    button: 'accept',
  }
  const dispatch = useDispatch()
  const handleSignIn = () => {
    dispatch(setIsShowLoginModal(false))
  }
  return (
    <LoginModalOverlay>
      <Modal>
        <button onClick={handleSignIn}>Sign In</button>
      </Modal>
    </LoginModalOverlay>
  )
}

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 350px;
  background-color: #fff;
  border-radius: 15px;
`

const LoginModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
`

export default LoginModal
