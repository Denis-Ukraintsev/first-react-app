import React from 'react'
import styled from 'styled-components'

const LoginModal = () => {
  const i18n = {
    login: 'login',
    password: 'password',
    button: 'accept',
  }
  return (
    <ItemContainer>
      <div>{i18n}</div>
      <div>
        <textarea />
      </div>
      <button>{i18n.button}</button>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 350px;
  background-color: #fff;
  border-radius: 15px;
`

export default LoginModal
