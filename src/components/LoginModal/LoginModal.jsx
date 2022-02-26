import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { signIn } from 'src/redux/features/authSlice'

const LoginModal = () => {
  const [login, setLogin] = useState('den.from.oz@gmail.com')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const handleSignIn = () => {
    dispatch(signIn({ login, password }))
  }

  return (
    <LoginModalOverlay>
      <Modal>
        <StyledInput
          value={login}
          onChange={(event) => {
            setLogin(event.target.value)
          }}
        />
        <StyledInput
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <LoginButton onClick={handleSignIn}>Sign In</LoginButton>
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
const LoginButton = styled.button`
  height: 40px;
  width: 160px;
  border-radius: 8px;
  border: 1px solid #706e83;
`
const StyledInput = styled.input`
  height: 20px;
  width: 160px;
  border-radius: 8px;
  margin-bottom: 10px;
  padding-left: 8px;
  border: 1px solid #706e83;
`

export default LoginModal
