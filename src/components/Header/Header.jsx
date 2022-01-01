import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImg src="https://simg.nicepng.com/png/small/50-501551_stadium-com-photography-icon-photography-logo-icon-png.png" />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
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
