import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from 'src/redux/features/authSlice'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { emailRegEx } from 'src/helpers/regExPatterns'

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const handleSignIn = ({ login, password }) => {
    dispatch(signIn({ login, password }))
  }

  return (
    <LoginModalOverlay>
      <Modal onSubmit={handleSubmit(handleSignIn)}>
        <StyledInput
          {...register('login', {
            validate: {
              notEmail: (value) => emailRegEx.test(value),
            },
            required: true,
          })}
        />
        {errors.login &&
          errors.login.type === 'notEmail' &&
          'email is not valid'}
        {errors.login?.type === 'required' && 'Login is required'}
        <StyledInput
          type="password"
          {...register('password', {
            required: true,
            minLength: {
              value: 4,
              message: 'password should have more symbols',
            },
          })}
        />
        {errors.password?.type === 'required' && 'Password is required'}
        {errors.password?.message && errors.password?.message}
        <LoginButton type="submit">Sign In</LoginButton>
      </Modal>
    </LoginModalOverlay>
  )
}

const Modal = styled.form`
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
